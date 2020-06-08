(function()
{
	// console.log("loading tm",mxConstants.STYLE_SHAPE)
	// Adds mockup shapes
	Sidebar.prototype.addTMPalette = function()
	{
		var s = 1;
		var w = 80 * s;
		var h = 100 * s;
		var w2 = 60 * s;
	
		
		
	
		var gn = 'mxGraph.tm';
		var sb = this;
		var dt = 'threat model';
		// 'resourceIcon;resIcon=' + gn + 
		this.addPaletteFunctions('tmAttack', 'TM / Attack', false,
		[
			this.createVertexTemplateEntry('outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#f3f3f3;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.tm.attackIcon;atkIcon=mxgraph.tm.attacker",
			w2, w2, 'Attacker', null, null, null, this.getTagsForStencil(gn, 'attacker', dt).join(' ')),
		]);
		
	};
}
)();

