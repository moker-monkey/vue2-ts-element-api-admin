import * as api from './api'
import Api, { paramsType, type } from './Model'

Api.setQuote('teacher', [{
    key: 'name',
    label: '教师名字',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', 'string_length'],
    component: {
        type: type.input
    }
}])

Api.setValidate('string_length', (value: any, field_obj: any, argument: any) => {
    // 校验前必须是传入完整的数据结构，在校验完成后再组合成正常的数据结构
    // 添加的验证必须返回一个布尔值
    // 如果是一个object那么就调用api的一个方法validateQuote去获取，然后递归调用
    // 如果value是一个Multi，则调用validateMulti方法，并传入当前的递归方法名，即可
    if (field_obj.type === 'string') {
        if (value.length < 3) {
            return { key: field_obj.key, message: '字符串长度不能小于3', value, __name: field_obj.__name }
        }
    }
    return true
})
Api.setValidate('rex-', (params: any, field_obj: any, argument: any) => {
    // 添加的验证必须返回一个布尔值
    const value = params[field_obj.key]
    if (value.length < argument.min) {
        return { key: field_obj.key, message: `字符串长度不能小于${argument.min}` }
    }
    if (value.length > argument.max) {
        return { key: field_obj.key, message: `字符串长度不能大于${argument.max}` }
    }
    return true
})

// Api.setValidate('type', )
// 每个字段可以添加一个base字段来进行溯源，base指向的是api，或者quote这样，如果没有指向则表示该字段为最底层字段

api.empty.setParams('GET', [{
    key: 'name',
    label: '我的姓名',
    require: true,
    describe: '用户的姓名，至少三个字',
    type: paramsType.string,
    isNull: false,
    validate: ['string_length'],
    value: 'abx',
    component: {
        type: type.input
    }
}, {
    key: 'age',
    label: '年龄',
    require: false,
    type: paramsType.number,
    isNull: true,
    validate: ['type'],
    value: 0,
    component: {
        type: type.inputNumber
    }
}, {
    key: 'teacher',
    label: '教师信息',
    require: true,
    type: paramsType.object,
    isNull: true,
    validate: ['type'],
    quote: 'teacher',
    value: { name: 'sh' }
}, {
    key: 'address',
    label: '地址',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    isMultiValue: true
}, {
    key: 'class',
    label: '教授课程',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    isMultiValue: true,
    value: '',
    component: {
        type: type.cascader,
        options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }, {
                    value: 'xiaolv',
                    label: '效率'
                }, {
                    value: 'kekong',
                    label: '可控'
                }]
            }, {
                value: 'daohang',
                label: '导航',
                children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                }]
            }]
        }, {
            value: 'zujian',
            label: '组件',
            children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                }, {
                    value: 'color',
                    label: 'Color 色彩'
                }, {
                    value: 'typography',
                    label: 'Typography 字体'
                }, {
                    value: 'icon',
                    label: 'Icon 图标'
                }, {
                    value: 'button',
                    label: 'Button 按钮'
                }]
            }, {
                value: 'form',
                label: 'Form',
                children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                }, {
                    value: 'input',
                    label: 'Input 输入框'
                }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                }, {
                    value: 'select',
                    label: 'Select 选择器'
                }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                }, {
                    value: 'switch',
                    label: 'Switch 开关'
                }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                }, {
                    value: 'upload',
                    label: 'Upload 上传'
                }, {
                    value: 'rate',
                    label: 'Rate 评分'
                }, {
                    value: 'form',
                    label: 'Form 表单'
                }]
            }, {
                value: 'data',
                label: 'Data',
                children: [{
                    value: 'table',
                    label: 'Table 表格'
                }, {
                    value: 'tag',
                    label: 'Tag 标签'
                }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                }, {
                    value: 'badge',
                    label: 'Badge 标记'
                }]
            }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                }, {
                    value: 'loading',
                    label: 'Loading 加载'
                }, {
                    value: 'message',
                    label: 'Message 消息提示'
                }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                }, {
                    value: 'notification',
                    label: 'Notification 通知'
                }]
            }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                }]
            }, {
                value: 'others',
                label: 'Others',
                children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                }, {
                    value: 'card',
                    label: 'Card 卡片'
                }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                }]
            }]
        }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
                value: 'axure',
                label: 'Axure Components'
            }, {
                value: 'sketch',
                label: 'Sketch Templates'
            }, {
                value: 'jiaohu',
                label: '组件交互文档'
            }]
        }]
    }
}, {
    key: 'gender',
    label: '性别',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: 'male',
    component: {
        type: type.radio,
        options: [{
            label: '男',
            value: 'male'
        }, {
            label: '女',
            value: 'Female'
        }]
    }
}, {
    key: 'course',
    label: '课程',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: [],
    isMultiValue: true,
    component: {
        type: type.checkbox,
        options: [{
            label: '政治',
            value: '0'
        }, {
            label: '生理卫生',
            value: '1'
        }, {
            label: '心理健康',
            value: '2'
        }, {
            label: '语文',
            value: '3'
        }, {
            label: '数学',
            value: '4'
        }]
    }
}, {
    key: 'holiday',
    label: '休假',
    require: true,
    type: paramsType.boolean,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: true,
    component: {
        type: type.switch,
    }
}])
