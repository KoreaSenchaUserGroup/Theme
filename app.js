Ext.application({
    name: 'KSUG-sample',

    launch: function() {
		Ext.create('Ext.TabPanel', {
		    fullscreen: true,
		    tabBarPosition: 'bottom',

		    defaults: {
		        styleHtmlContent: true
		    },

		    items: [
		        {
		            title: 'Home',
		            iconCls: 'home',
		            html: 'Home Screen'
		        },
		        {
		            title: 'Contact',
		            iconCls: 'user',
		            html: 'Contact Screen'
		        }
		    ]
		});
    }
});