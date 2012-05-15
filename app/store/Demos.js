(function() {
    var animations = {
        text: 'Animations',
        card: false,
        id: 'animations',
        items: [
            {
                text: 'Slide',
                id: 'Slide',
                items: [
                    {
                        text: 'Slide Left',
                        id: 'SlideLeft',
                        view: 'SlideLeft',
                        card: false,
                        animation: {
                            type: 'slide'
                        },
                        leaf: true
                    },
                    {
                        text: 'Slide Right',
                        card: false,
                        id: 'SlideRight',
                        view: 'SlideRight',
                        animation: {
                            type: 'slide',
                            direction: 'right'
                        },
                        leaf: true
                    },
                    {
                        text: 'Slide Up',
                        card: false,
                        id: 'SlideUp',
                        view: 'SlideUp',
                        animation: {
                            type: 'slide',
                            direction: 'up'
                        },
                        leaf: true
                    },
                    {
                        text: 'Slide Down',
                        card: false,
                        id: 'SlideDown',
                        view: 'SlideDown',
                        animation: {
                            type: 'slide',
                            direction: 'down'
                        },
                        leaf: true
                    }
                ]
            },
            {
                text: 'Fade',
                id: 'Fade',
                card: false,
                animation: {
                    type: 'fade',
                    duration: 500
                },
                leaf: true
            }
        ]};

    if (!Ext.os.is.Android2) {
        animations.items.push({
            text: 'Cover',
            id: 'Cover',
            items: [
                {
                    text: 'Cover Left',
                    card: false,
                    view: 'CoverLeft',
                    id: 'CoverLeft',
                    animation: {
                        type: 'cover'
                    },
                    leaf: true
                },
                {
                    text: 'Cover Right',
                    card: false,
                    id: 'CoverRight',
                    view: 'CoverRight',
                    animation: {
                        type: 'cover',
                        direction: 'right'
                    },
                    leaf: true
                },
                {
                    text: 'Cover Up',
                    card: false,
                    view: 'CoverUp',
                    id: 'CoverUp',
                    animation: {
                        type: 'cover',
                        direction: 'up'
                    },
                    leaf: true
                },
                {
                    text: 'Cover Down',
                    card: false,
                    id: 'CoverDown',
                    view: 'CoverDown',
                    animation: {
                        type: 'cover',
                        direction: 'down'
                    },
                    leaf: true
                }
            ]
        },
        {
            text: 'Reveal',
            id: 'Reveal',
            items: [
                {
                    text: 'Reveal Left',
                    card: false,
                    id: 'RevealLeft',
                    view: 'RevealLeft',
                    animation: {
                        type: 'reveal'
                    },
                    leaf: true
                },
                {
                    text: 'Reveal Right',
                    card: false,
                    id: 'RevealRight',
                    view: 'RevealRight',
                    animation: {
                        direction: 'right',
                        type: 'reveal'
                    },
                    leaf: true
                },
                {
                    text: 'Reveal Up',
                    card: false,
                    id: 'RevealUp',
                    view: 'RevealUp',
                    animation: {
                        direction: 'up',
                        type: 'reveal'
                    },
                    leaf: true
                },
                {
                    text: 'Reveal Down',
                    card: false,
                    id: 'RevealDown',
                    view: 'RevealDown',
                    animation: {
                        direction: 'down',
                        type: 'reveal'
                    },
                    leaf: true
                }
            ]
        }, {
            text: 'Pop',
            id: 'Pop',
            card: false,
            animation: {
                type: 'pop'
            },
            leaf: true
        }, {
            text: 'Flip',
            id: 'Flip',
            card: false,
            animation: {
                type: 'flip'
            },
            leaf: true
        });
    }

    var root = {
        id: 'root',
        text: 'Kitchen Sink',
        items: [
            {
                text: 'KoZZang',
                id: 'kozzang',
                cls: 'launchscreen',
                items: [
                    {
                        text: 'Buttons',
                        leaf: true,
                        id: 'buttons'
                    },
                    {
                        text: 'Forms',
                        leaf: true,
                        id: 'forms'
                    }
                ]
            },
            {
                text: 'Ko Jaedo',
                id: 'jaedo',
                cls: 'launchscreen',
                items: [
                    {
                        text: 'List',
                        leaf: true,
                        id: 'list'
                    },
                    {
                        text: 'Nested List',
                        view: 'NestedList',
                        leaf: true,
                        id: 'nestedlist'
                    },
                    {
                        text: 'Icons',
                        leaf: true,
                        id: 'icons'
                    }
                ]
            },
            {
                text: 'Kim MinJun',
                id: 'minjun',
                cls: 'launchscreen',
                items: [
                    {
                        text: 'Toolbars',
                        leaf: true,
                        id: 'toolbars'
                    },
                    {
                        text: 'Carousel',
                        leaf: true,
                        id: 'carousel'
                    },
                    {
                        text: 'Tabs',
                        leaf: true,
                        id: 'tabs'
                    }
                ]
            },
            {
                text: 'Choi JongWon',
                id: 'jongwon',
                cls: 'launchscreen',
                items: [
                    {
                        text: 'Bottom Tabs',
                        view: 'BottomTabs',
                        leaf: true,
                        id: 'bottom-tabs'
                    },
                    {
                        text: 'Overlays',
                        leaf: true,
                        id: 'overlays'
                    }
                ]
            }
        ]
    };

    

    Ext.define('Kitchensink.store.Demos', {
        alias: 'store.Demos',
        extend: 'Ext.data.TreeStore',
        requires: ['Kitchensink.model.Demo'],

        config: {
            model: 'Kitchensink.model.Demo',
            root: root,
            defaultRootProperty: 'items'
        }
    });
})();
