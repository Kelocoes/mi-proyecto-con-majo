#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float u_intensity;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 v_uv [[user(v_uv)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> u_src [[texture(0)]], texture2d<float> u_lut [[texture(1)]], sampler u_srcSmplr [[sampler(0)]], sampler u_lutSmplr [[sampler(1)]])
{
    main0_out out = {};
    float4 _190 = fast::clamp(u_src.sample(u_srcSmplr, in.v_uv), float4(0.0), float4(1.0));
    float3 _217 = _190.xyz;
    float _219 = step(0.800010025501251220703125, buffer.u_intensity);
    float3 _270 = _217 * 63.0;
    float _272 = _270.z;
    float _274 = floor(_272);
    float2 _277 = float2(_274, ceil(_272));
    float2 _280 = floor(_277 * 0.125);
    float4 _307 = (float4(_277 - (_280 * 8.0), _280).xzyw * 0.125) + float4(((_270.xy + float2(0.5)) * 0.001953125).xyxy);
    float _309 = _307.y;
    float4 _420 = _307;
    _420.y = (_309 + _219) * 0.5;
    float _315 = _307.w;
    float4 _423 = _420;
    _423.w = (_315 + _219) * 0.5;
    float3 _336 = float3(_272 - _274);
    float4 _428 = _307;
    _428.y = _309 * 0.5;
    float4 _431 = _428;
    _431.w = _315 * 0.5;
    float _233 = (1.0 - buffer.u_intensity) * 5.0;
    float _237 = (_233 > 1.0) ? 0.0 : _233;
    out.gl_FragColor = float4(mix(_217, (mix(u_lut.sample(u_lutSmplr, _431.xy).xyz, u_lut.sample(u_lutSmplr, _431.zw).xyz, _336) * _237) + (mix(u_lut.sample(u_lutSmplr, _423.xy).xyz, u_lut.sample(u_lutSmplr, _423.zw).xyz, _336) * (1.0 - _237)), float3(mix(smoothstep(0.0, 0.800000011920928955078125, buffer.u_intensity), 1.0, _219))), _190.w);
    return out;
}

