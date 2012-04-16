Ext.Loader.setPath({
    'Ext': 'sencha-touch-2/src'
});

Ext.application({
  
      launch: function() {
        var viewport = Ext.Viewport;

        viewport.add({
            xtype: 'titlebar',
            docked: 'top',
            title: 'Navigation',
            items: [
                {
                    iconCls: 'spaces1',
                    iconMask: true,
                    align: 'left'
                },
                {
                    iconCls: 'list',
                    iconMask: true,
                    align: 'left'
                },
                {
                    iconCls: 'refresh',
                    iconMask: true,
                    align: 'right'
                },
                {
                    align: 'right',
                    text: '편집'
                }
            ]
        });

        viewport.add({
            xtype: 'tabpanel',

            tabBar: {
                docked: 'bottom',
            },
            ui: 'light',
            defaults: {
                scrollable: true
            },
            items: [
                {
                    xtype : 'toolbar',
                    docked: 'top',
                     layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: {
                        xtype: 'segmentedbutton',
                        items:[
                            {
                                text: '만화'
                            },
                            {
                                text   : '장르소설'
                            },
                            {
                                text: '잡지'
                            },
                            {
                                text: '카탈로그'
                            }
                        ]
                    }
                },
                {
                    title: '내서재',
                    html: '<h1>Bottom Tabs</h1><p>Docking tabs to the bottom will automatically change their style. The tabs below are type="light" (default type is "dark"). Badges (like the 4 &amp; Long title below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
                    iconCls: 'user',
                    cls: 'card1'
                },
                {
                    title: '북마크',
                    html: '<h1>bookmarks</h1>',
                    iconCls: 'bookmarks',
                    cls: 'card2'
                },
                {
                    title: '다운로드',
                    html: '<h1>다운로드</h1>',
                    iconCls: 'download',
                    cls: 'card3'
                },
                {
                    title: '검색',
                    html: '<h1>검색</h1>',
                    iconCls: 'search'
                },
                {
                    title: '설정',
                    html: '<h1>설정</h1>',
                    iconCls: 'settings'
                }
            ]
        });
    }
});
