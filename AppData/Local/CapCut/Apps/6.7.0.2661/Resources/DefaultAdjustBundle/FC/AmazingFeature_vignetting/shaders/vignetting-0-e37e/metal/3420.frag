#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float u_vignettingIntensity;
    float u_vignettingParam;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> u_inputTexture [[texture(0)]], sampler u_inputTextureSmplr [[sampler(0)]])
{
    main0_out out = {};
    float4 _19 = u_inputTexture.sample(u_inputTextureSmplr, in.uv0);
    float _31 = length((in.uv0 * 2.0) - float2(1.0));
    bool _40 = buffer.u_vignettingIntensity >= 9.9999997473787516355514526367188e-05;
    float2 _144 = select(float2(0.20000000298023223876953125, 0.89999997615814208984375), float2(0.100000001490116119384765625, 0.85000002384185791015625), bool2(_40));
    float4 _140;
    if (_40)
    {
        float _61 = abs(buffer.u_vignettingParam);
        float3 _81 = mix(_19.xyz, float3(0.0), float3(smoothstep(mix(1.0, _144.x, _61) * 1.41499996185302734375, mix(1.39999997615814208984375, _144.y, _61) * 1.41499996185302734375, _31)));
        float4 _125 = _19;
        _125.x = _81.x;
        float4 _127 = _125;
        _127.y = _81.y;
        float4 _129 = _127;
        _129.z = _81.z;
        _140 = _129;
    }
    else
    {
        float3 _111 = mix(_19.xyz, float3(1.0), float3(smoothstep(mix(1.0, _144.x, abs(buffer.u_vignettingIntensity)) * 1.41499996185302734375, mix(1.5, _144.y, abs(buffer.u_vignettingParam)) * 1.41499996185302734375, _31)));
        float4 _133 = _19;
        _133.x = _111.x;
        float4 _135 = _133;
        _135.y = _111.y;
        float4 _137 = _135;
        _137.z = _111.z;
        _140 = _137;
    }
    out.gl_FragColor = _140;
    return out;
}

