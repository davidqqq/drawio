/**
 * $Id: mxAws3d.js,v 1.0 2015/10/11 07:05:39 mate Exp $
 * Copyright (c) 2006-2015, JGraph Ltd
 */

//**********************************************************************************************************************************************************
//Arrow NE
//**********************************************************************************************************************************************************
/**
* Extends mxShape.
*/
function mxShapeTMAttackIcon(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
* Extends mxShape.
*/
mxUtils.extend(mxShapeTMAttackIcon, mxShape);

mxShapeTMAttackIcon.prototype.cst = {
		ATTACK_ICON : 'mxgraph.tm.attackIcon'
};

/**
* Function: paintVertexShape
* 
* Paints the vertex shape.
*/
mxShapeTMAttackIcon.prototype.paintVertexShape = function(c, x, y, w, h)
{
	console.log('painting mxSHapTmAttacker')
	c.translate(x, y);

	c.begin();
	c.moveTo(0, 0);
	c.lineTo(w, 0);
	c.lineTo(w, h);
	c.lineTo(0, h);
	c.close();
	c.fill();

	var atkIcon = mxUtils.getValue(this.state.style, 'atkIcon', '');
	var stencil = mxStencilRegistry.getStencil(atkIcon);

	// if (stencil != null)
	// {
		var strokeColor = mxUtils.getValue(this.state.style, 'strokeColor', '#000000');
		c.setFillColor(strokeColor);
		c.setStrokeColor('none');
		// console.log(c)
		c.image(w * 0.1, h * 0.1, w * 0.8, h * 0.8,"/hacker.svg")
		// stencil.drawShape(c, this, w * 0.1, h * 0.1, w * 0.8, h * 0.8);
		
	// }
	// stencil.drawShape(c, this, w * 0.1, h * 0.1, w * 0.8, h * 0.8);
};

mxCellRenderer.registerShape(mxShapeTMAttackIcon.prototype.cst.ATTACK_ICON, mxShapeTMAttackIcon);
