#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float intensity;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv [[user(uv)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> srcTexture [[texture(0)]], texture2d<float> resultTexture [[texture(1)]], sampler srcTextureSmplr [[sampler(0)]], sampler resultTextureSmplr [[sampler(1)]])
{
    main0_out out = {};
    float _44 = fast::clamp(buffer.intensity, 0.0, 1.0);
    out.gl_FragColor = (srcTexture.sample(srcTextureSmplr, in.uv) * (1.0 - _44)) + (resultTexture.sample(resultTextureSmplr, float2(in.uv.x, 1.0 - in.uv.y)) * _44);
    return out;
}

