import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';

storiesOf('Components|Grid', module)
  .add('basic', () => (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            12
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            6
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            6
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            4
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            4
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            4
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            3
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            3
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            3
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            3
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
        <Grid item xs={2}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            2
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: 'center', background: '#fff', padding: 20 }}>
            1
          </div>
        </Grid>
      </Grid>
    </div>
  ))
  .add('justify aligment', () => (
    <div>
      <Grid container justify="space-between">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
      <Grid container justify="flex-start">
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ background: '#fff', padding: 20 }}>3</div>
        </Grid>
      </Grid>
    </div>
  ));
