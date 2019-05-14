/**
 * @author thespite / http://www.twitter.com/thespite
 */

import { MaxEquation, MinEquation, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGB_ETC1_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT5_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT1_Format, RGB_S3TC_DXT1_Format, SrcAlphaSaturateFactor, OneMinusDstColorFactor, DstColorFactor, OneMinusDstAlphaFactor, DstAlphaFactor, OneMinusSrcAlphaFactor, SrcAlphaFactor, OneMinusSrcColorFactor, SrcColorFactor, OneFactor, ZeroFactor, ReverseSubtractEquation, SubtractEquation, AddEquation, DepthFormat, DepthStencilFormat, LuminanceAlphaFormat, LuminanceFormat, RGBAFormat, RGBAIntegerFormat, RGBFormat, RGBIntegerFormat, AlphaFormat, RedFormat, RedIntegerFormat, R8Format, R8_SNORMFormat, R8IFormat, R8UIFormat, R16IFormat, R16UIFormat, R16FFormat, R32IFormat, R32UIFormat, R32FFormat, RGFormat, RGIntegerFormat, RG8Format, RG8_SNORMFormat, RG8IFormat, RG8UIFormat, RG16IFormat, RG16UIFormat, RG16FFormat, RG32IFormat, RG32UIFormat, RG32FFormat, RGB565Format, RGB8Format, RGB8_SNORMFormat, RGB8IFormat, RGB8UIFormat, RGB9_E5Format, RGB16IFormat, RGB16UIFormat, RGB16FFormat, RGB32IFormat, RGB32UIFormat, RGB32FFormat, SRGB8Format, R11F_G11F_B10FFormat, RGBA4Format, RGBA8Format, RGBA8_SNORMFormat, RGBA8IFormat, RGBA8UIFormat, RGBA16IFormat, RGBA16UIFormat, RGBA16FFormat, RGBA32IFormat, RGBA32UIFormat, RGBA32FFormat, RGB5_A1Format, RGB10_A2Format, RGB10_A2UIFormat, SRGB8_ALPHA8Format, HalfFloatType, FloatType, UnsignedIntType, IntType, UnsignedShortType, ShortType, ByteType, UnsignedInt248Type, UnsignedShort565Type, UnsignedShort5551Type, UnsignedShort4444Type, UnsignedByteType, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestFilter, MirroredRepeatWrapping, ClampToEdgeWrapping, RepeatWrapping } from '../../constants.js';

function WebGLUtils( gl, extensions, capabilities ) {

	function convert( p ) {

		var extension;

		if ( p === RepeatWrapping ) return gl.REPEAT;
		if ( p === ClampToEdgeWrapping ) return gl.CLAMP_TO_EDGE;
		if ( p === MirroredRepeatWrapping ) return gl.MIRRORED_REPEAT;

		if ( p === NearestFilter ) return gl.NEAREST;
		if ( p === NearestMipMapNearestFilter ) return gl.NEAREST_MIPMAP_NEAREST;
		if ( p === NearestMipMapLinearFilter ) return gl.NEAREST_MIPMAP_LINEAR;

		if ( p === LinearFilter ) return gl.LINEAR;
		if ( p === LinearMipMapNearestFilter ) return gl.LINEAR_MIPMAP_NEAREST;
		if ( p === LinearMipMapLinearFilter ) return gl.LINEAR_MIPMAP_LINEAR;

		if ( p === UnsignedByteType ) return gl.UNSIGNED_BYTE;
		if ( p === UnsignedShort4444Type ) return gl.UNSIGNED_SHORT_4_4_4_4;
		if ( p === UnsignedShort5551Type ) return gl.UNSIGNED_SHORT_5_5_5_1;
		if ( p === UnsignedShort565Type ) return gl.UNSIGNED_SHORT_5_6_5;

		if ( p === ByteType ) return gl.BYTE;
		if ( p === ShortType ) return gl.SHORT;
		if ( p === UnsignedShortType ) return gl.UNSIGNED_SHORT;
		if ( p === IntType ) return gl.INT;
		if ( p === UnsignedIntType ) return gl.UNSIGNED_INT;
		if ( p === FloatType ) return gl.FLOAT;

		if ( p === HalfFloatType ) {

			if ( capabilities.isWebGL2 ) return gl.HALF_FLOAT;

			extension = extensions.get( 'OES_texture_half_float' );

			if ( extension !== null ) return extension.HALF_FLOAT_OES;

		}

		if ( p === AlphaFormat ) return gl.ALPHA;
		if ( p === RGBFormat ) return gl.RGB;
		if ( p === RGBAFormat ) return gl.RGBA;
		if ( p === LuminanceFormat ) return gl.LUMINANCE;
		if ( p === LuminanceAlphaFormat ) return gl.LUMINANCE_ALPHA;
		if ( p === DepthFormat ) return gl.DEPTH_COMPONENT;
		if ( p === DepthStencilFormat ) return gl.DEPTH_STENCIL;
		if ( p === RedFormat ) return gl.RED;

		if ( p === AddEquation ) return gl.FUNC_ADD;
		if ( p === SubtractEquation ) return gl.FUNC_SUBTRACT;
		if ( p === ReverseSubtractEquation ) return gl.FUNC_REVERSE_SUBTRACT;

		if ( p === ZeroFactor ) return gl.ZERO;
		if ( p === OneFactor ) return gl.ONE;
		if ( p === SrcColorFactor ) return gl.SRC_COLOR;
		if ( p === OneMinusSrcColorFactor ) return gl.ONE_MINUS_SRC_COLOR;
		if ( p === SrcAlphaFactor ) return gl.SRC_ALPHA;
		if ( p === OneMinusSrcAlphaFactor ) return gl.ONE_MINUS_SRC_ALPHA;
		if ( p === DstAlphaFactor ) return gl.DST_ALPHA;
		if ( p === OneMinusDstAlphaFactor ) return gl.ONE_MINUS_DST_ALPHA;

		if ( p === DstColorFactor ) return gl.DST_COLOR;
		if ( p === OneMinusDstColorFactor ) return gl.ONE_MINUS_DST_COLOR;
		if ( p === SrcAlphaSaturateFactor ) return gl.SRC_ALPHA_SATURATE;

		if ( p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format ||
			p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_s3tc' );

			if ( extension !== null ) {

				if ( p === RGB_S3TC_DXT1_Format ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if ( p === RGBA_S3TC_DXT1_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if ( p === RGBA_S3TC_DXT3_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if ( p === RGBA_S3TC_DXT5_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

			}

		}

		if ( p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format ||
			p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_pvrtc' );

			if ( extension !== null ) {

				if ( p === RGB_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if ( p === RGB_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if ( p === RGBA_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if ( p === RGBA_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

			}

		}

		if ( p === RGB_ETC1_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_etc1' );

			if ( extension !== null ) return extension.COMPRESSED_RGB_ETC1_WEBGL;

		}

		if ( p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format ||
			p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format ||
			p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format ||
			p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format ||
			p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format ) {

			extension = extensions.get( 'WEBGL_compressed_texture_astc' );

			if ( extension !== null ) {

				return p;

			}

		}

		if ( p === MinEquation || p === MaxEquation ) {

			if ( capabilities.isWebGL2 ) {

				if ( p === MinEquation ) return gl.MIN;
				if ( p === MaxEquation ) return gl.MAX;

			}

			extension = extensions.get( 'EXT_blend_minmax' );

			if ( extension !== null ) {

				if ( p === MinEquation ) return extension.MIN_EXT;
				if ( p === MaxEquation ) return extension.MAX_EXT;

			}

		}

		if ( p === UnsignedInt248Type ) {

			if ( capabilities.isWebGL2 ) return gl.UNSIGNED_INT_24_8;

			extension = extensions.get( 'WEBGL_depth_texture' );

			if ( extension !== null ) return extension.UNSIGNED_INT_24_8_WEBGL;

		}

		if ( p === RedIntegerFormat ) return gl.RED_INTEGER;
		if ( p === R8Format ) return gl.R8;
		if ( p === R8_SNORMFormat ) return gl.R8_SNORM;
		if ( p === R8IFormat ) return gl.R8I;
		if ( p === R8UIFormat ) return gl.R8UI;
		if ( p === R16IFormat ) return gl.R16I;
		if ( p === R16UIFormat ) return gl.R16UI;
		if ( p === R16FFormat ) return gl.R16F;
		if ( p === R32IFormat ) return gl.R32I;
		if ( p === R32UIFormat ) return gl.R32UI;
		if ( p === R32FFormat ) return gl.R32F;
		if ( p === RGFormat ) return gl.RG;
		if ( p === RGIntegerFormat ) return gl.RG_INTEGER;
		if ( p === RG8Format ) return gl.RG8;
		if ( p === RG8_SNORMFormat ) return gl.RG8_SNORM;
		if ( p === RG8IFormat ) return gl.RG8I;
		if ( p === RG8UIFormat ) return gl.RG8UI;
		if ( p === RG16IFormat ) return gl.RG16I;
		if ( p === RG16UIFormat ) return gl.RG16UI;
		if ( p === RG16FFormat ) return gl.RG16F;
		if ( p === RG32IFormat ) return gl.RG32I;
		if ( p === RG32UIFormat ) return gl.RG32UI;
		if ( p === RG32FFormat ) return gl.RG32F;
		if ( p === RGBFormat ) return gl.RGB;
		if ( p === RGBIntegerFormat ) return gl.RGB_INTEGER;
		if ( p === RGB565Format ) return gl.RGB565;
		if ( p === RGB8Format ) return gl.RGB8;
		if ( p === RGB8_SNORMFormat ) return gl.RGB8_SNORM;
		if ( p === RGB8IFormat ) return gl.RGB8I;
		if ( p === RGB8UIFormat ) return gl.RGB8UI;
		if ( p === RGB9_E5Format ) return gl.RGB9_E5;
		if ( p === RGB16IFormat ) return gl.RGB16I;
		if ( p === RGB16UIFormat ) return gl.RGB16UI;
		if ( p === RGB16FFormat ) return gl.RGB16F;
		if ( p === RGB32IFormat ) return gl.RGB32I;
		if ( p === RGB32UIFormat ) return gl.RGB32UI;
		if ( p === RGB32FFormat ) return gl.RGB32F;
		if ( p === SRGB8Format ) return gl.SRGB8;
		if ( p === R11F_G11F_B10FFormat ) return gl.R11F_G11F_B10F;
		if ( p === RGBAFormat ) return gl.RGBA;
		if ( p === RGBAIntegerFormat ) return gl.RGBA_INTEGER;
		if ( p === RGBA4Format ) return gl.RGBA4;
		if ( p === RGBA8Format ) return gl.RGBA8;
		if ( p === RGBA8_SNORMFormat ) return gl.RGBA8_SNORM;
		if ( p === RGBA8IFormat ) return gl.RGBA8I;
		if ( p === RGBA8UIFormat ) return gl.RGBA8UI;
		if ( p === RGBA16IFormat ) return gl.RGBA16I;
		if ( p === RGBA16UIFormat ) return gl.RGBA16UI;
		if ( p === RGBA16FFormat ) return gl.RGBA16F;
		if ( p === RGBA32IFormat ) return gl.RGBA32I;
		if ( p === RGBA32UIFormat ) return gl.RGBA32UI;
		if ( p === RGBA32FFormat ) return gl.RGBA32F;
		if ( p === RGB5_A1Format ) return gl.RGB5_A1;
		if ( p === RGB10_A2Format ) return gl.RGB10_A2;
		if ( p === RGB10_A2UIFormat ) return gl.RGB10_A2UI;
		if ( p === SRGB8_ALPHA8Format ) return gl.SRGB8_ALPHA8;

		return 0;

	}

	return { convert: convert };

}


export { WebGLUtils };
