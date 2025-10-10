#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float sat_ratio;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> u_albedo [[texture(0)]], sampler u_albedoSmplr [[sampler(0)]])
{
    main0_out out = {};
    float4 _166 = fast::clamp(u_albedo.sample(u_albedoSmplr, in.uv0), float4(0.0), float4(1.0));
    float _210 = _166.z;
    float _211 = _166.y;
    float4 _230 = mix(float4(_210, _211, -1.0, 0.666666686534881591796875), float4(_211, _210, 0.0, -0.3333333432674407958984375), float4(step(_210, _211)));
    float _234 = _166.x;
    float _235 = _230.x;
    float4 _253 = mix(float4(_235, _230.yw, _234), float4(_234, _230.yz, _235), float4(step(_235, _234)));
    float _255 = _253.x;
    float _257 = _253.w;
    float _259 = _253.y;
    float _261 = _255 - fast::min(_257, _259);
    float4 _331 = _166;
    _331.x = abs(_253.z + ((_257 - _259) / fma(6.0, _261, 1.0000000133514319600180897396058e-10)));
    float3 _315 = mix(float3(1.0), fast::clamp(abs((fract(_331.xxx + float3(1.0, 0.666666686534881591796875, 0.3333333432674407958984375)) * 6.0) - float3(3.0)) - float3(1.0), float3(0.0), float3(1.0)), float3((_261 / (_255 + 1.0000000133514319600180897396058e-10)) * buffer.sat_ratio)) * _255;
    float4 _342 = _331;
    _342.x = _315.x;
    float4 _344 = _342;
    _344.y = _315.y;
    float4 _346 = _344;
    _346.z = _315.z;
    out.gl_FragColor = _346;
    return out;
}

