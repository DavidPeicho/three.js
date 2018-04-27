/**
 * @author davidpeicho
 */

import { Texture } from './Texture.js';
import { ClampToEdgeWrapping } from '../constants.js';

function Texture3D( data, width, height, depth, mapping, wrapS, wrapT, wrapR,
	magFilter, minFilter, internalFormat, format, type, anisotropy, encoding ) {

	Texture.call( this, null, mapping, wrapS, wrapT, magFilter,
		minFilter, format, type, anisotropy, encoding );

	if ( ! width || ! height || ! depth ) {

		console.warn( `THREE.Texture3D.ctor(): invalid dimensions.` );

	}

	// Only available with 3D textures.
	this.wrapR = wrapR !== undefined ? wrapR : ClampToEdgeWrapping;

	if ( internalFormat ) this.internalFormat = internalFormat;

	this.image = { data: data, width: width, height: height, depth: depth };
	mapping = mapping;

	this.flipY = false;

}

Texture3D.prototype = Object.create( Texture.prototype );
Texture3D.prototype.constructor = Texture3D;

export { Texture3D };
