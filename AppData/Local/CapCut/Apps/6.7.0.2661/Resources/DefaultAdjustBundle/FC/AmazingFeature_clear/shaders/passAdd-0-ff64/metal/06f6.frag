#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float addFlag;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> upTex [[texture(0)]], texture2d<float> preTex [[texture(1)]], sampler upTexSmplr [[sampler(0)]], sampler preTexSmplr [[sampler(1)]])
{
    main0_out out = {};
    float4 _116 = upTex.sample(upTexSmplr, in.uv0);
    float4 _121 = preTex.sample(preTexSmplr, in.uv0);
    float _181 = fma(_121.z, 1.5378700481960549950599670410156e-05, fma(_121.y, 0.0039215688593685626983642578125, _121.x)) * mix(-1.0, 1.0, _121.w);
    float _143 = fast::clamp(fma(fma(_116.z, 1.5378700481960549950599670410156e-05, fma(_116.y, 0.0039215688593685626983642578125, _116.x)) * mix(-1.0, 1.0, _116.w), buffer.addFlag, mix(_181, _181, buffer.addFlag)), 0.0, 1.0);
    float _192 = abs(_143) * 255.0;
    float _199 = fract(_192) * 255.0;
    out.gl_FragColor = float4(floor(_192) * 0.0039215688593685626983642578125, floor(_199) * 0.0039215688593685626983642578125, floor(fract(_199) * 255.0) * 0.0039215688593685626983642578125, step(0.0, _143));
    return out;
}

