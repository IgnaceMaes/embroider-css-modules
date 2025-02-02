import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import 'ember-source/types';
import 'ember-source/types/preview';

import SvgJarHelper from '@gavant/glint-template-types/types/ember-svg-jar/helpers/svg-jar';
import AndHelper from '@gavant/glint-template-types/types/ember-truth-helpers/helpers/and';
import OrHelper from '@gavant/glint-template-types/types/ember-truth-helpers/helpers/or';
import { ComponentLike, HelperLike } from '@glint/template';
import type EmberContainerQueryRegistry from 'ember-container-query/template-registry';
import type EmbroiderCssModulesRegistry from 'embroider-css-modules/template-registry';

type NavigationNarratorComponent = ComponentLike<{
  Args: {
    skipTo: string;
  };
}>;

type PageTitleHelper = HelperLike<{
  Args: { Positional: [title: string] };
  Return: void;
}>;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberContainerQueryRegistry,
      EmbroiderCssModulesRegistry {
    // Add any registry entries from other addons here that your addon itself uses (in non-strict mode templates)
    // See https://typed-ember.gitbook.io/glint/using-glint/ember/using-addons
    NavigationNarrator: NavigationNarratorComponent;
    and: typeof AndHelper;
    or: typeof OrHelper;
    'page-title': PageTitleHelper;
    'svg-jar': typeof SvgJarHelper;
  }
}
