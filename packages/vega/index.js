// -- Transforms -----

import {extend} from 'vega-util';
import {transforms} from 'vega-dataflow';
import * as tx from 'vega-transforms';
import * as vtx from '@omni-co/vega-view-transforms';
import * as encode from 'vega-encode';
import * as geo from 'vega-geo';
import * as force from 'vega-force';
import * as tree from 'vega-hierarchy';
import * as label from '@omni-co/vega-label';
import * as reg from 'vega-regression';
import * as voronoi from 'vega-voronoi';
import * as wordcloud from 'vega-wordcloud';
import * as xf from 'vega-crossfilter';
extend(
  transforms,
  tx, vtx, encode, geo, force, label, tree, reg, voronoi, wordcloud, xf
);


// -- Exports -----

import * as pkg from './package.json' with { type: 'json' };
export const version = pkg.version;

export * from 'vega-statistics';

export * from 'vega-time';

export * from 'vega-util';

export * from 'vega-loader';

export * from '@omni-co/vega-scenegraph';

export {
  Dataflow,
  EventStream,
  Parameters,
  Pulse,
  MultiPulse,
  Operator,
  Transform,
  changeset,
  ingest,
  isTuple,
  definition,
  transform,
  transforms,
  tupleid
} from 'vega-dataflow';

export {
  scale,
  scheme,
  interpolate,
  interpolateColors,
  interpolateRange,
  quantizeInterpolator
} from 'vega-scale';

export {
  projection
} from 'vega-projection';

export {
  View
} from '@omni-co/vega-view';

export {
  numberFormatDefaultLocale as formatLocale,
  timeFormatDefaultLocale as timeFormatLocale,
  locale,
  defaultLocale,
  resetDefaultLocale
} from 'vega-format';

export {
  expressionFunction
} from '@omni-co/vega-functions';

export {
  parse
} from '@omni-co/vega-parser';

export {
  context as runtimeContext
} from 'vega-runtime';

export {
  codegenExpression,
  parseExpression
} from 'vega-expression';

export {
  parseSelector
} from 'vega-event-selector';
