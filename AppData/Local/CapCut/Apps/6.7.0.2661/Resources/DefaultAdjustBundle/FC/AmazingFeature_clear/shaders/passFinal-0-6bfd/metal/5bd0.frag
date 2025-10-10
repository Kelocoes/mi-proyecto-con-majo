#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float intensity;
};

constant float4 _445 = {};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> valueTex [[texture(0)]], texture2d<float> satTex [[texture(1)]], texture2d<float> oriTex [[texture(2)]], sampler valueTexSmplr [[sampler(0)]], sampler satTexSmplr [[sampler(1)]], sampler oriTexSmplr [[sampler(2)]])
{
    main0_out out = {};
    float4 _200 = valueTex.sample(valueTexSmplr, in.uv0);
    float4 _207 = satTex.sample(satTexSmplr, in.uv0);
    float _286 = _207.z;
    float _287 = _207.y;
    float4 _306 = mix(float4(_286, _287, -1.0, 0.666666686534881591796875), float4(_287, _286, 0.0, -0.3333333432674407958984375), float4(step(_286, _287)));
    float _310 = _207.x;
    float _311 = _306.x;
    float4 _329 = mix(float4(_311, _306.yw, _310), float4(_310, _306.yz, _311), float4(step(_311, _310)));
    float _331 = _329.x;
    float _333 = _329.w;
    float _335 = _329.y;
    float _337 = _331 - fast::min(_333, _335);
    float4 _411 = _445;
    _411.x = abs(_329.z + ((_333 - _335) / fma(6.0, _337, 1.0000000133514319600180897396058e-10)));
    float3 _391 = mix(float3(1.0), fast::clamp(abs((fract(_411.xxx + float3(1.0, 0.666666686534881591796875, 0.3333333432674407958984375)) * 6.0) - float3(3.0)) - float3(1.0), float3(0.0), float3(1.0)), float3(_337 / (_331 + 1.0000000133514319600180897396058e-10))) * (fma(_200.z, 1.5378700481960549950599670410156e-05, fma(_200.y, 0.0039215688593685626983642578125, _200.x)) * mix(-1.0, 1.0, _200.w));
    float4 _422 = _445;
    _422.x = _391.x;
    float4 _424 = _422;
    _424.y = _391.y;
    float4 _426 = _424;
    _426.z = _391.z;
    float4 _237 = oriTex.sample(oriTexSmplr, in.uv0);
    float3 _246 = mix(_237.xyz, _426.xyz, float3(buffer.intensity));
    float4 _428 = _237;
    _428.x = _246.x;
    float4 _430 = _428;
    _430.y = _246.y;
    float4 _432 = _430;
    _432.z = _246.z;
    out.gl_FragColor = fast::clamp(_432, float4(0.0), float4(1.0));
    return out;
}

