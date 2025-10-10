#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float fact;
    float resOffset;
    float subFlag;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> pyrLastTex [[texture(0)]], texture2d<float> pyrCurTex [[texture(1)]], sampler pyrLastTexSmplr [[sampler(0)]], sampler pyrCurTexSmplr [[sampler(1)]])
{
    main0_out out = {};
    float4 _116 = pyrLastTex.sample(pyrLastTexSmplr, in.uv0);
    float _176 = fma(_116.z, 1.5378700481960549950599670410156e-05, fma(_116.y, 0.0039215688593685626983642578125, _116.x));
    float _179 = mix(-1.0, 1.0, _116.w);
    float4 _125 = pyrCurTex.sample(pyrCurTexSmplr, in.uv0);
    float _135 = fma(_176, _179, -(fma(_125.z, 1.5378700481960549950599670410156e-05, fma(_125.y, 0.0039215688593685626983642578125, _125.x)) * mix(-1.0, 1.0, _125.w)));
    float _158 = mix(_176 * _179, fma(buffer.fact * _135, exp(((-_135) * _135) * 22.22222137451171875), _135) + buffer.resOffset, buffer.subFlag);
    float _207 = abs(_158) * 255.0;
    float _214 = fract(_207) * 255.0;
    out.gl_FragColor = float4(floor(_207) * 0.0039215688593685626983642578125, floor(_214) * 0.0039215688593685626983642578125, floor(fract(_214) * 255.0) * 0.0039215688593685626983642578125, step(0.0, _158));
    return out;
}

