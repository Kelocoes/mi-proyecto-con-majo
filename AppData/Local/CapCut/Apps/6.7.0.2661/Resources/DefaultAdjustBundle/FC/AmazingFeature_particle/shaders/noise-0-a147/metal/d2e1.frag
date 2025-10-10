#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float Seed;
    float Intensity;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> inputImageTexture [[texture(0)]], sampler inputImageTextureSmplr [[sampler(0)]])
{
    main0_out out = {};
    float4 _77 = inputImageTexture.sample(inputImageTextureSmplr, in.uv0);
    float3 _117 = fract(float3(in.uv0 * 9331.990234375, buffer.Seed * 9331.990234375) * 0.103100001811981201171875) + float3(buffer.Seed);
    float3 _126 = _117 + float3(dot(_117, _117.yzx + float3(33.3300018310546875)));
    float3 _91 = _77.xyz + float3((fract((_126.x + _126.y) * _126.z) - 0.5) * buffer.Intensity);
    float4 _145 = _77;
    _145.x = _91.x;
    float4 _147 = _145;
    _147.y = _91.y;
    float4 _149 = _147;
    _149.z = _91.z;
    out.gl_FragColor = _149;
    return out;
}

