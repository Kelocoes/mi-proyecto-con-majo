#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float huagan;
    float alphaFactor;
    float2 radius;
    float out_huagan;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 fTexCoord [[user(fTexCoord)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> _MainTex [[texture(0)]], sampler _MainTexSmplr [[sampler(0)]])
{
    main0_out out = {};
    float _31 = length((in.fTexCoord * 2.0) - float2(1.0));
    bool _39 = buffer.huagan > 9.9999997473787516355514526367188e-05;
    float4 _61 = _MainTex.sample(_MainTexSmplr, float2(in.fTexCoord.x, 1.0 - in.fTexCoord.y));
    float2 _189 = select(buffer.radius, float2(0.100000001490116119384765625, 0.85000002384185791015625), bool2(_39));
    if (_39)
    {
        float _103 = abs(buffer.out_huagan);
        out.gl_FragColor.x = 0.0;
        out.gl_FragColor.y = 0.0;
        out.gl_FragColor.z = 0.0;
        out.gl_FragColor.w = smoothstep(mix(1.0, _189.x, _103) * 1.41499996185302734375, mix(1.39999997615814208984375, _189.y, _103) * 1.41499996185302734375, _31) * buffer.out_huagan;
    }
    else
    {
        out.gl_FragColor = float4(smoothstep(mix(1.0, _189.x, abs(buffer.huagan)) * 1.41499996185302734375, mix(1.5, _189.y, abs(buffer.out_huagan)) * 1.41499996185302734375, _31));
        float3 _157 = fast::clamp((select(float3(1.0), float3(9.9999997473787516355514526367188e-05), bool3(_39)) * buffer.alphaFactor) + (_61.xyz * (1.0 - buffer.alphaFactor)), float3(0.0), float3(1.0));
        out.gl_FragColor.x = _157.x;
        out.gl_FragColor.y = _157.y;
        out.gl_FragColor.z = _157.z;
    }
    return out;
}

