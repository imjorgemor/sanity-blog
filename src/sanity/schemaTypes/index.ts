import { type SchemaTypeDefinition } from 'sanity';

import {blockContentType} from './blockContentType';
import {categoryType} from './categoryType';
import {postType} from './postType';
import {authorType} from './authorType';
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { faqType } from "./faqType";
import { faqsType } from "./faqsType";
import { featuresType } from "./featuresType";
import { heroType } from "./heroType";
import { splitImageType } from "./splitImageType";
import { siteSettingsType } from "./siteSettingsType";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, pageType, pageBuilderType, faqType, faqsType, featuresType, heroType, splitImageType, siteSettingsType],
};
