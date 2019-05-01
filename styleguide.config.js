/* eslint-disable */
const path = require('path');
const fs = require('fs');
const schema = require('./components.json');
const pkg = require('./package.json');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({ name, components }) => {
    return {
      name,
      components() {
        return components.map(componentName => {
          return resolve(
            'src/components',
            componentName,
            `${componentName}.tsx`,
          );
        });
      },
    };
  });
}

module.exports = {
  title: `VideoCoin UI Kit v${pkg.version}`,
  sections: getSections(),
  contextDependencies: [path.resolve(__dirname, 'src/components')],
  require: [path.join(__dirname, 'src/styles/styleguide.css')],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700',
        },
      ],
    },
  },
  theme: {
    color: {
      baseBackground: '#0C0417',
      sidebarBackground: '#281741',
      codeBackground: '#281741',
      border: '#372e44',
      base: '#9683B2',
      codeBase: '#9683B2',
      link: '#d6d6d6',
    },
    fontFamily: {
      base: 'Rubik, sans-serif',
    },
  },
  styles: {
    Table: {
      cellHeading: {
        paddingRight: 35,
      },
      cell: {
        paddingRight: 35,
      },
    },
    Type: {
      type: {
        whiteSpace: 'nowrap',
      },
    },
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from '${pkg.name}';`;
  },
  propsParser: filePath => {
    const result = require('react-docgen-typescript')
      .withCustomConfig('./tsconfig.json', {
        propFilter: prop => {
          if (prop.parent == null) {
            return true;
          }

          return prop.parent.fileName.indexOf('node_modules/@types/react') < 0;
        },
      })
      .parse(filePath);
    return result.map(component => {
      const { props } = component;
      const mappedProps = Object.values(props).reduce((previous, prop) => {
        const { name } = prop;
        return {
          ...previous,
          [name]: {
            ...prop,
            type: {
              name: prop.type.name.replace('| undefined', ''),
            },
          },
        };
      }, {});

      return {
        ...component,
        props: mappedProps,
      };
    });
  },
};
