#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float u_contrastPivotSlope;
    float u_contrastLeftSlopeDiff;
    float u_contrastLeftDiff;
    float u_contrastRightSlopeDiff;
    float u_contrastRightDiff;
    int u_enableContrast;
    float u_contrastParam;
    float u_contrastPivot;
    float u_contrastXFactor;
    int u_enableHighlight;
    float u_highlightParam;
    int u_enableShadow;
    float u_shadowParam;
    int u_enableBlackWhite;
    float u_blackWhiteSlope;
    float u_blackWhiteBias;
    int u_enableBrightness;
    float u_brightnessParam;
    int u_enableTemperatureTint;
    float3 u_temperatureTintRedVec3;
    float3 u_temperatureTintGreenVec3;
    float3 u_temperatureTintBlueVec3;
    int u_enableSaturation;
    float u_saturationParam;
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
    float4 _197 = u_inputTexture.sample(u_inputTextureSmplr, in.uv0);
    float4 _942;
    if (buffer.u_enableContrast == 1)
    {
        float4 _941;
        if (buffer.u_contrastParam <= 1.0)
        {
            float3 _216 = float3(buffer.u_contrastPivot);
            float3 _221 = ((_197.xyz - _216) * buffer.u_contrastParam) + _216;
            float4 _837 = _197;
            _837.x = _221.x;
            float4 _839 = _837;
            _839.y = _221.y;
            float4 _841 = _839;
            _841.z = _221.z;
            _941 = _841;
        }
        else
        {
            float _236 = _197.x;
            float _574 = -buffer.u_contrastXFactor;
            float _581 = 1.0 / (1.0 + exp(_574 * (_236 - buffer.u_contrastPivot)));
            float _584 = (_581 + buffer.u_contrastPivot) - 0.5;
            float _601 = buffer.u_contrastXFactor * _581;
            float _603 = 1.0 - _581;
            float _935;
            if (_236 <= buffer.u_contrastPivot)
            {
                float _545 = fma(-_601, _603, buffer.u_contrastPivotSlope) / buffer.u_contrastLeftSlopeDiff;
                _935 = fma(_545 * _545, buffer.u_contrastLeftDiff, _584);
            }
            else
            {
                float _559 = fma(-_601, _603, buffer.u_contrastPivotSlope) / buffer.u_contrastRightSlopeDiff;
                _935 = fma(_559 * _559, buffer.u_contrastRightDiff, _584);
            }
            float4 _844 = _197;
            _844.x = _935;
            float _245 = _197.y;
            float _670 = 1.0 / (1.0 + exp(_574 * (_245 - buffer.u_contrastPivot)));
            float _673 = (_670 + buffer.u_contrastPivot) - 0.5;
            float _690 = buffer.u_contrastXFactor * _670;
            float _692 = 1.0 - _670;
            float _937;
            if (_245 <= buffer.u_contrastPivot)
            {
                float _634 = fma(-_690, _692, buffer.u_contrastPivotSlope) / buffer.u_contrastLeftSlopeDiff;
                _937 = fma(_634 * _634, buffer.u_contrastLeftDiff, _673);
            }
            else
            {
                float _648 = fma(-_690, _692, buffer.u_contrastPivotSlope) / buffer.u_contrastRightSlopeDiff;
                _937 = fma(_648 * _648, buffer.u_contrastRightDiff, _673);
            }
            float4 _847 = _844;
            _847.y = _937;
            float _254 = _197.z;
            float _759 = 1.0 / (1.0 + exp(_574 * (_254 - buffer.u_contrastPivot)));
            float _762 = (_759 + buffer.u_contrastPivot) - 0.5;
            float _779 = buffer.u_contrastXFactor * _759;
            float _781 = 1.0 - _759;
            float _939;
            if (_254 <= buffer.u_contrastPivot)
            {
                float _723 = fma(-_779, _781, buffer.u_contrastPivotSlope) / buffer.u_contrastLeftSlopeDiff;
                _939 = fma(_723 * _723, buffer.u_contrastLeftDiff, _762);
            }
            else
            {
                float _737 = fma(-_779, _781, buffer.u_contrastPivotSlope) / buffer.u_contrastRightSlopeDiff;
                _939 = fma(_737 * _737, buffer.u_contrastRightDiff, _762);
            }
            float4 _850 = _847;
            _850.z = _939;
            _941 = _850;
        }
        float3 _266 = fast::clamp(_941.xyz, float3(0.0), float3(1.0));
        float4 _852 = _941;
        _852.x = _266.x;
        float4 _854 = _852;
        _854.y = _266.y;
        float4 _856 = _854;
        _856.z = _266.z;
        _942 = _856;
    }
    else
    {
        _942 = _197;
    }
    float4 _943;
    if (buffer.u_enableHighlight == 1)
    {
        float3 _792 = float3(1.0) - _942.xyz;
        float3 _811 = (float3(1.0) - pow(_792, float3(buffer.u_highlightParam))) - (fma(_792, _792, -((_792 * _792) * _792)) * (buffer.u_highlightParam - 1.0));
        float4 _858 = _942;
        _858.x = _811.x;
        float4 _860 = _858;
        _860.y = _811.y;
        float4 _862 = _860;
        _862.z = _811.z;
        float3 _295 = fast::clamp(_862.xyz, float3(0.0), float3(1.0));
        float4 _864 = _862;
        _864.x = _295.x;
        float4 _866 = _864;
        _866.y = _295.y;
        float4 _868 = _866;
        _868.z = _295.z;
        _943 = _868;
    }
    else
    {
        _943 = _942;
    }
    float4 _944;
    if (buffer.u_enableShadow == 1)
    {
        float3 _834 = pow(_943.xyz, float3(buffer.u_shadowParam)) + (fma(_943.xyz, _943.xyz, -((_943.xyz * _943.xyz) * _943.xyz)) * (buffer.u_shadowParam - 1.0));
        float4 _870 = _943;
        _870.x = _834.x;
        float4 _872 = _870;
        _872.y = _834.y;
        float4 _874 = _872;
        _874.z = _834.z;
        float3 _324 = fast::clamp(_874.xyz, float3(0.0), float3(1.0));
        float4 _876 = _874;
        _876.x = _324.x;
        float4 _878 = _876;
        _878.y = _324.y;
        float4 _880 = _878;
        _880.z = _324.z;
        _944 = _880;
    }
    else
    {
        _944 = _943;
    }
    float4 _945;
    if (buffer.u_enableBlackWhite == 1)
    {
        float3 _344 = (_944.xyz * buffer.u_blackWhiteSlope) + float3(buffer.u_blackWhiteBias);
        float4 _882 = _944;
        _882.x = _344.x;
        float4 _884 = _882;
        _884.y = _344.y;
        float4 _886 = _884;
        _886.z = _344.z;
        float3 _355 = fast::clamp(_886.xyz, float3(0.0), float3(1.0));
        float4 _888 = _886;
        _888.x = _355.x;
        float4 _890 = _888;
        _890.y = _355.y;
        float4 _892 = _890;
        _892.z = _355.z;
        _945 = _892;
    }
    else
    {
        _945 = _944;
    }
    float4 _948;
    if (buffer.u_enableBrightness == 1)
    {
        float4 _946;
        float _947;
        if (buffer.u_brightnessParam > 0.0)
        {
            _947 = fma(buffer.u_brightnessParam, 5.0, 1.0);
            _946 = _945;
        }
        else
        {
            float3 _390 = _945.xyz - float3(buffer.u_brightnessParam * (-0.00999999977648258209228515625));
            float4 _894 = _945;
            _894.x = _390.x;
            float4 _896 = _894;
            _896.y = _390.y;
            float4 _898 = _896;
            _898.z = _390.z;
            _947 = 1.0 / fma(-buffer.u_brightnessParam, 2.5, 1.0);
            _946 = _898;
        }
        float3 _405 = float3(1.0) - pow(float3(1.0) - _946.xyz, float3(_947));
        float4 _900 = _946;
        _900.x = _405.x;
        float4 _902 = _900;
        _902.y = _405.y;
        float4 _904 = _902;
        _904.z = _405.z;
        float3 _416 = fast::clamp(_904.xyz, float3(0.0), float3(1.0));
        float4 _906 = _904;
        _906.x = _416.x;
        float4 _908 = _906;
        _908.y = _416.y;
        float4 _910 = _908;
        _910.z = _416.z;
        _948 = _910;
    }
    else
    {
        _948 = _945;
    }
    float4 _949;
    if (buffer.u_enableTemperatureTint == 1)
    {
        float4 _912 = _948;
        _912.x = dot(_948.xyz, buffer.u_temperatureTintRedVec3);
        float4 _914 = _912;
        _914.y = dot(_948.xyz, buffer.u_temperatureTintGreenVec3);
        float4 _916 = _914;
        _916.z = dot(_948.xyz, buffer.u_temperatureTintBlueVec3);
        float3 _451 = fast::clamp(_916.xyz, float3(0.0), float3(1.0));
        float4 _918 = _916;
        _918.x = _451.x;
        float4 _920 = _918;
        _920.y = _451.y;
        float4 _922 = _920;
        _922.z = _451.z;
        _949 = _922;
    }
    else
    {
        _949 = _948;
    }
    float4 _950;
    if (buffer.u_enableSaturation == 1)
    {
        float3 _474 = float3(0.2085399925708770751953125, 0.702085971832275390625, 0.089373998343944549560546875) * (1.0 - buffer.u_saturationParam);
        float4 _924 = _949;
        _924.x = dot(_949.xyz, _474 + float3(buffer.u_saturationParam, 0.0, 0.0));
        float4 _926 = _924;
        _926.y = dot(_949.xyz, _474 + float3(0.0, buffer.u_saturationParam, 0.0));
        float4 _928 = _926;
        _928.z = dot(_949.xyz, _474 + float3(0.0, 0.0, buffer.u_saturationParam));
        float3 _504 = fast::clamp(_928.xyz, float3(0.0), float3(1.0));
        float4 _930 = _928;
        _930.x = _504.x;
        float4 _932 = _930;
        _932.y = _504.y;
        float4 _934 = _932;
        _934.z = _504.z;
        _950 = _934;
    }
    else
    {
        _950 = _949;
    }
    out.gl_FragColor = fast::clamp(_950, float4(0.0), float4(1.0));
    return out;
}

