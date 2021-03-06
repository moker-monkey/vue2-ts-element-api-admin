import RouteConfigSingleView from '../../node_modules/vue-router/types'
import RouteConfigMultipleViews from '../../node_modules/vue-router/types'
export interface RouterMeta extends RouterMeta {
    title?: string
    icon?: string  // use class-name,
    hidden?: boolean // default false,
    breadcrumb?: boolean // if true, the item will be hidden breadcrumb(default is true)
    noCatch?: boolean // default is false,if true,the page will not be cached;
    affix?: boolean // default is true, if true,the tag will affix in the tags-view
    activeMenu?: string // /example/list  (if set path, the sidebar will highlight the path you set)
    roles?: string[] // /
    alwaysShow?: boolean // if father only have one child,use it
}

