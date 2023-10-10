import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';

type ComponentOptions = {
  name: string;
  description: string;
  author: string;
};

const webModule = 'packages';

const spacingCapitalize = (str: string) => strings.capitalize(strings.underscore(str).replace('_', ' '));

const moveDirTests = (options: ComponentOptions): Rule => (tree: Tree) => {  
  const nameDasherize = strings.dasherize(options.name);
  const nameClassify = strings.classify(options.name);

  const from = `${tree.root.path}/${webModule}/${nameDasherize}/src/components/${nameClassify}/_tests_`;
  const to = from.replace('_tests_', '__tests__');

  return move(from, to);
};

export const generate = (options: ComponentOptions): Rule => (tree: Tree) => {
  const lerna = tree.read('lerna.json');  
  let version = '1.0.0';  
  if (lerna) {  
    const lernaJson = JSON.parse(lerna.toString()) as { version: string };  
    version = lernaJson.version;  
  }

  const source = apply(url('./files'), [  
    template({  
      ...options,  
      dasherize: strings.dasherize,  
      classify: strings.classify,  
      spacingCapitalize,  
      version,  
    }),  
    move(webModule),
  ]);  

  return chain([branchAndMerge(mergeWith(source)), moveDirTests(options)]);  
};
