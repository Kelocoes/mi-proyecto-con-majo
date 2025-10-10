#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float u_aspect;
    float2 u_position;
    float u_rotation;
    float2 u_scale;
    int u_blendWithMask;
    float u_maskBlendMode;
    float4 u_maskPreviewColor;
};

constant float _437 = {};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> u_resultTex [[texture(0)]], texture2d<float> u_inputTex [[texture(1)]], texture2d<float> u_adjustTex [[texture(2)]], texture2d<float> u_previewMask [[texture(3)]], sampler u_resultTexSmplr [[sampler(0)]], sampler u_inputTexSmplr [[sampler(1)]], sampler u_adjustTexSmplr [[sampler(2)]], sampler u_previewMaskSmplr [[sampler(3)]])
{
    main0_out out = {};
    if (buffer.u_blendWithMask == 0)
    {
        out.gl_FragColor = u_resultTex.sample(u_resultTexSmplr, in.uv0);
    }
    else
    {
        if (buffer.u_maskBlendMode < 0.001000000047497451305389404296875)
        {
            float4 _142 = u_inputTex.sample(u_inputTexSmplr, in.uv0);
            out.gl_FragColor = float4(mix(float4(mix(u_adjustTex.sample(u_adjustTexSmplr, in.uv0).xyz, buffer.u_maskPreviewColor.xyz, float3(buffer.u_maskPreviewColor.w)), _437).xyz, _142.xyz, float3(u_resultTex.sample(u_resultTexSmplr, in.uv0).w)), _142.w);
        }
        else
        {
            float4 _194 = u_inputTex.sample(u_inputTexSmplr, in.uv0);
            float4 _198 = u_resultTex.sample(u_resultTexSmplr, in.uv0);
            float4 _202 = u_adjustTex.sample(u_adjustTexSmplr, in.uv0);
            float _324 = fma((in.uv0.x - 0.5) * 2.0, buffer.u_aspect, -(buffer.u_position.x * buffer.u_aspect));
            float _329 = fma(in.uv0.y - 0.5, 2.0, buffer.u_position.y);
            float _360 = cos(buffer.u_rotation);
            float _365 = sin(buffer.u_rotation);
            float _350 = (((fma(_360, _324, -(_365 * _329)) / buffer.u_scale.x) * 0.5) / buffer.u_aspect) + 0.5;
            float _354 = fma(fma(_365, _324, _360 * _329) / buffer.u_scale.y, 0.5, 0.5);
            bool _213 = _350 < 1.0;
            bool _219;
            if (_213)
            {
                _219 = _354 < 1.0;
            }
            else
            {
                _219 = _213;
            }
            bool _225;
            if (_219)
            {
                _225 = _350 > 0.0;
            }
            else
            {
                _225 = _219;
            }
            bool _231;
            if (_225)
            {
                _231 = _354 > 0.0;
            }
            else
            {
                _231 = _225;
            }
            float4 _425;
            if (_231)
            {
                _425 = u_previewMask.sample(u_previewMaskSmplr, float2(_350, _354));
            }
            else
            {
                _425 = float4(0.0);
            }
            float3 _242 = _194.xyz;
            float3 _245 = float3(_425.w);
            out.gl_FragColor = float4(mix(float4(mix(float4(mix(_202.xyz, _242, _245), _437).xyz, float4(mix(float3(0.0), buffer.u_maskPreviewColor.xyz, _245), buffer.u_maskPreviewColor.w).xyz, float3(buffer.u_maskPreviewColor.w * _425.w)), _437).xyz, _242, float3(_198.w)), _194.w);
        }
    }
    return out;
}

