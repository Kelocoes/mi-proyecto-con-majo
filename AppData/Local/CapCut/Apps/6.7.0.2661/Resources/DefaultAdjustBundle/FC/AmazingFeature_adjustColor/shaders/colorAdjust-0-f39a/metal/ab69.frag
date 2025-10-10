#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    int u_enableBlackWhite;
    float u_blackWhiteSlope;
    float u_blackWhiteBias;
    int u_enableBrightness;
    float u_brightnessParam;
    int u_enableHighlight;
    float u_highlightParam;
    float u_highlightBias;
    int u_enableShadow;
    float u_shadowParam;
    float u_shadowBias;
    int u_enableContrast;
    float u_contrastParam;
    float u_contrastPivot;
    int u_enableFade;
    float u_fadeParam;
    int u_enableSaturation;
    float u_saturationParam;
    int u_enableTemperatureTint;
    float3 u_temperatureTintRedVec3;
    float3 u_temperatureTintGreenVec3;
    float3 u_temperatureTintBlueVec3;
    int u_enableLightSensation;
    float u_lightSensationParam;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> u_inputTexture [[texture(0)]], texture2d<float> u_lightSensationMinTexture [[texture(1)]], texture2d<float> u_lightSensationMaxTexture [[texture(2)]], sampler u_inputTextureSmplr [[sampler(0)]], sampler u_lightSensationMinTextureSmplr [[sampler(1)]], sampler u_lightSensationMaxTextureSmplr [[sampler(2)]])
{
    main0_out out = {};
    float4 _608 = u_inputTexture.sample(u_inputTextureSmplr, in.uv0);
    float4 _2743;
    if (buffer.u_enableBlackWhite == 1)
    {
        float3 _626 = (_608.xyz * buffer.u_blackWhiteSlope) + float3(buffer.u_blackWhiteBias);
        float4 _2498 = _608;
        _2498.x = _626.x;
        float4 _2500 = _2498;
        _2500.y = _626.y;
        float4 _2502 = _2500;
        _2502.z = _626.z;
        _2743 = _2502;
    }
    else
    {
        _2743 = _608;
    }
    float4 _2768;
    if (buffer.u_enableBrightness == 1)
    {
        float4 _2769;
        if (buffer.u_brightnessParam > 0.0)
        {
            float _649 = fma(buffer.u_brightnessParam, 5.0, 1.0);
            float3 _658 = float3(1.0) - pow(float3(1.0) - _2743.xyz, float3(_649));
            float4 _2504 = _2743;
            _2504.x = _658.x;
            float4 _2506 = _2504;
            _2506.y = _658.y;
            float4 _2508 = _2506;
            _2508.z = _658.z;
            float _668 = pow(0.001000000047497451305389404296875, 1.0 / _649);
            float _671 = 1.0 - _668;
            float3 _1085 = _2743.xyz * 1.0;
            float3 _1088 = _1085 + float3(_668);
            float3 _2756;
            if (_2743.x > _671)
            {
                float3 _2512 = _2508.xyz;
                _2512.x = _1088.x;
                _2756 = _2512;
            }
            else
            {
                _2756 = _2508.xyz;
            }
            float3 _2757;
            if (_2743.y > _671)
            {
                float3 _2516 = _2756;
                _2516.y = _1088.y;
                _2757 = _2516;
            }
            else
            {
                _2757 = _2756;
            }
            float3 _2758;
            if (_2743.z > _671)
            {
                float3 _2520 = _2757;
                _2520.z = _1088.z;
                _2758 = _2520;
            }
            else
            {
                _2758 = _2757;
            }
            float4 _2522 = _2508;
            _2522.x = _2758.x;
            float4 _2524 = _2522;
            _2524.y = _2758.y;
            float4 _2526 = _2524;
            _2526.z = _2758.z;
            float3 _2762;
            if (_2743.x < 0.0)
            {
                float3 _2530 = _2526.xyz;
                _2530.x = _1085.x;
                _2762 = _2530;
            }
            else
            {
                _2762 = _2526.xyz;
            }
            float3 _2763;
            if (_2743.y < 0.0)
            {
                float3 _2534 = _2762;
                _2534.y = _1085.y;
                _2763 = _2534;
            }
            else
            {
                _2763 = _2762;
            }
            float3 _2764;
            if (_2743.z < 0.0)
            {
                float3 _2538 = _2763;
                _2538.z = _1085.z;
                _2764 = _2538;
            }
            else
            {
                _2764 = _2763;
            }
            float4 _2540 = _2526;
            _2540.x = _2764.x;
            float4 _2542 = _2540;
            _2542.y = _2764.y;
            float4 _2544 = _2542;
            _2544.z = _2764.z;
            _2769 = _2544;
        }
        else
        {
            float _712 = 1.0 / fma(-buffer.u_brightnessParam, 2.5, 1.0);
            float3 _720 = _2743.xyz + (_2743.xyz * (buffer.u_brightnessParam * 0.00999999977648258209228515625));
            float4 _2546 = _2743;
            _2546.x = _720.x;
            float4 _2548 = _2546;
            _2548.y = _720.y;
            float4 _2550 = _2548;
            _2550.z = _720.z;
            float3 _735 = float3(1.0) - pow(float3(1.0) - _2550.xyz, float3(_712));
            float4 _2552 = _2550;
            _2552.x = _735.x;
            float4 _2554 = _2552;
            _2554.y = _735.y;
            float4 _2556 = _2554;
            _2556.z = _735.z;
            float3 _1159 = _2743.xyz * 1.0;
            float3 _1162 = _1159 + float3(-pow(buffer.u_brightnessParam * (-0.00999999977648258209228515625), _712));
            float3 _2744;
            if (_2743.x > 1.0)
            {
                float3 _2560 = _2556.xyz;
                _2560.x = _1162.x;
                _2744 = _2560;
            }
            else
            {
                _2744 = _2556.xyz;
            }
            float3 _2745;
            if (_2743.y > 1.0)
            {
                float3 _2564 = _2744;
                _2564.y = _1162.y;
                _2745 = _2564;
            }
            else
            {
                _2745 = _2744;
            }
            float3 _2746;
            if (_2743.z > 1.0)
            {
                float3 _2568 = _2745;
                _2568.z = _1162.z;
                _2746 = _2568;
            }
            else
            {
                _2746 = _2745;
            }
            float4 _2570 = _2556;
            _2570.x = _2746.x;
            float4 _2572 = _2570;
            _2572.y = _2746.y;
            float4 _2574 = _2572;
            _2574.z = _2746.z;
            float3 _2750;
            if (_2743.x < 0.0)
            {
                float3 _2578 = _2574.xyz;
                _2578.x = _1159.x;
                _2750 = _2578;
            }
            else
            {
                _2750 = _2574.xyz;
            }
            float3 _2751;
            if (_2743.y < 0.0)
            {
                float3 _2582 = _2750;
                _2582.y = _1159.y;
                _2751 = _2582;
            }
            else
            {
                _2751 = _2750;
            }
            float3 _2752;
            if (_2743.z < 0.0)
            {
                float3 _2586 = _2751;
                _2586.z = _1159.z;
                _2752 = _2586;
            }
            else
            {
                _2752 = _2751;
            }
            float4 _2588 = _2574;
            _2588.x = _2752.x;
            float4 _2590 = _2588;
            _2590.y = _2752.y;
            float4 _2592 = _2590;
            _2592.z = _2752.z;
            _2769 = _2592;
        }
        _2768 = _2769;
    }
    else
    {
        _2768 = _2743;
    }
    float4 _2800;
    if (buffer.u_enableHighlight == 1)
    {
        bool _1239 = buffer.u_highlightParam > 1.0;
        float _2770;
        if (_1239)
        {
            float _2771;
            if (_2768.x > buffer.u_highlightBias)
            {
                _2771 = (_2768.x - buffer.u_highlightBias) + 1.0;
            }
            else
            {
                float _2772;
                if (_2768.x >= 0.0)
                {
                    float _1254 = 1.0 - _2768.x;
                    float _2903 = 1.0 - buffer.u_highlightParam;
                    _2772 = fma(_2903 * (-0.032999999821186065673828125), _2768.x, fma(_2903, fma(_1254, _1254, -((_1254 * _1254) * _1254)), 1.0 - pow(_1254, buffer.u_highlightParam)));
                }
                else
                {
                    _2772 = _2768.x;
                }
                _2771 = _2772;
            }
            _2770 = _2771;
        }
        else
        {
            float _2773;
            if (_2768.x > 1.0)
            {
                _2773 = _2768.x + buffer.u_highlightBias;
            }
            else
            {
                float _2774;
                if (_2768.x >= 0.0)
                {
                    float _1293 = fma(-0.9900000095367431640625, _2768.x, 1.0);
                    float _2901 = 1.0 - buffer.u_highlightParam;
                    _2774 = fma(_2768.x, buffer.u_highlightParam, fma(_2901, fma(_1293, _1293, -((_1293 * _1293) * _1293)), 1.0 - pow(_1293, buffer.u_highlightParam)) * _2901);
                }
                else
                {
                    _2774 = _2768.x;
                }
                _2773 = _2774;
            }
            _2770 = _2773;
        }
        float4 _2595 = _2768;
        _2595.x = _2770;
        float _2780;
        if (_1239)
        {
            float _2781;
            if (_2768.y > buffer.u_highlightBias)
            {
                _2781 = (_2768.y - buffer.u_highlightBias) + 1.0;
            }
            else
            {
                float _2782;
                if (_2768.y >= 0.0)
                {
                    float _1348 = 1.0 - _2768.y;
                    float _2908 = 1.0 - buffer.u_highlightParam;
                    _2782 = fma(_2908 * (-0.032999999821186065673828125), _2768.y, fma(_2908, fma(_1348, _1348, -((_1348 * _1348) * _1348)), 1.0 - pow(_1348, buffer.u_highlightParam)));
                }
                else
                {
                    _2782 = _2768.y;
                }
                _2781 = _2782;
            }
            _2780 = _2781;
        }
        else
        {
            float _2783;
            if (_2768.y > 1.0)
            {
                _2783 = _2768.y + buffer.u_highlightBias;
            }
            else
            {
                float _2784;
                if (_2768.y >= 0.0)
                {
                    float _1387 = fma(-0.9900000095367431640625, _2768.y, 1.0);
                    float _2906 = 1.0 - buffer.u_highlightParam;
                    _2784 = fma(_2768.y, buffer.u_highlightParam, fma(_2906, fma(_1387, _1387, -((_1387 * _1387) * _1387)), 1.0 - pow(_1387, buffer.u_highlightParam)) * _2906);
                }
                else
                {
                    _2784 = _2768.y;
                }
                _2783 = _2784;
            }
            _2780 = _2783;
        }
        float4 _2598 = _2595;
        _2598.y = _2780;
        float _2790;
        if (_1239)
        {
            float _2791;
            if (_2768.z > buffer.u_highlightBias)
            {
                _2791 = (_2768.z - buffer.u_highlightBias) + 1.0;
            }
            else
            {
                float _2792;
                if (_2768.z >= 0.0)
                {
                    float _1442 = 1.0 - _2768.z;
                    float _2913 = 1.0 - buffer.u_highlightParam;
                    _2792 = fma(_2913 * (-0.032999999821186065673828125), _2768.z, fma(_2913, fma(_1442, _1442, -((_1442 * _1442) * _1442)), 1.0 - pow(_1442, buffer.u_highlightParam)));
                }
                else
                {
                    _2792 = _2768.z;
                }
                _2791 = _2792;
            }
            _2790 = _2791;
        }
        else
        {
            float _2793;
            if (_2768.z > 1.0)
            {
                _2793 = _2768.z + buffer.u_highlightBias;
            }
            else
            {
                float _2794;
                if (_2768.z >= 0.0)
                {
                    float _1481 = fma(-0.9900000095367431640625, _2768.z, 1.0);
                    float _2911 = 1.0 - buffer.u_highlightParam;
                    _2794 = fma(_2768.z, buffer.u_highlightParam, fma(_2911, fma(_1481, _1481, -((_1481 * _1481) * _1481)), 1.0 - pow(_1481, buffer.u_highlightParam)) * _2911);
                }
                else
                {
                    _2794 = _2768.z;
                }
                _2793 = _2794;
            }
            _2790 = _2793;
        }
        float4 _2601 = _2598;
        _2601.z = _2790;
        _2800 = _2601;
    }
    else
    {
        _2800 = _2768;
    }
    float4 _2831;
    if (buffer.u_enableShadow == 1)
    {
        bool _1520 = buffer.u_shadowParam < 1.0;
        float _2801;
        if (_1520)
        {
            float _2802;
            if (_2800.x < 0.0)
            {
                _2802 = _2800.x + buffer.u_shadowBias;
            }
            else
            {
                float _2803;
                if (_2800.x <= 1.0)
                {
                    float _1534 = fma(0.9900000095367431640625, _2800.x, 0.00999999977648258209228515625);
                    _2803 = fma(_2800.x, buffer.u_shadowParam, fma(buffer.u_shadowParam - 1.0, fma(_1534, _1534, -((_1534 * _1534) * _1534)), pow(_1534, buffer.u_shadowParam)) * (1.0 - buffer.u_shadowParam));
                }
                else
                {
                    _2803 = _2800.x;
                }
                _2802 = _2803;
            }
            _2801 = _2802;
        }
        else
        {
            float _2804;
            if (_2800.x < buffer.u_shadowBias)
            {
                _2804 = _2800.x - buffer.u_shadowBias;
            }
            else
            {
                float _2805;
                if (_2800.x <= 1.0)
                {
                    _2805 = fma(0.0350000001490116119384765625 * (1.0 - buffer.u_shadowParam), 1.0 - _2800.x, fma(buffer.u_shadowParam - 1.0, fma(_2800.x, _2800.x, -((_2800.x * _2800.x) * _2800.x)), pow(_2800.x, buffer.u_shadowParam)));
                }
                else
                {
                    _2805 = _2800.x;
                }
                _2804 = _2805;
            }
            _2801 = _2804;
        }
        float4 _2604 = _2800;
        _2604.x = _2801;
        float _2811;
        if (_1520)
        {
            float _2812;
            if (_2800.y < 0.0)
            {
                _2812 = _2800.y + buffer.u_shadowBias;
            }
            else
            {
                float _2813;
                if (_2800.y <= 1.0)
                {
                    float _1623 = fma(0.9900000095367431640625, _2800.y, 0.00999999977648258209228515625);
                    _2813 = fma(_2800.y, buffer.u_shadowParam, fma(buffer.u_shadowParam - 1.0, fma(_1623, _1623, -((_1623 * _1623) * _1623)), pow(_1623, buffer.u_shadowParam)) * (1.0 - buffer.u_shadowParam));
                }
                else
                {
                    _2813 = _2800.y;
                }
                _2812 = _2813;
            }
            _2811 = _2812;
        }
        else
        {
            float _2814;
            if (_2800.y < buffer.u_shadowBias)
            {
                _2814 = _2800.y - buffer.u_shadowBias;
            }
            else
            {
                float _2815;
                if (_2800.y <= 1.0)
                {
                    _2815 = fma(0.0350000001490116119384765625 * (1.0 - buffer.u_shadowParam), 1.0 - _2800.y, fma(buffer.u_shadowParam - 1.0, fma(_2800.y, _2800.y, -((_2800.y * _2800.y) * _2800.y)), pow(_2800.y, buffer.u_shadowParam)));
                }
                else
                {
                    _2815 = _2800.y;
                }
                _2814 = _2815;
            }
            _2811 = _2814;
        }
        float4 _2607 = _2604;
        _2607.y = _2811;
        float _2821;
        if (_1520)
        {
            float _2822;
            if (_2800.z < 0.0)
            {
                _2822 = _2800.z + buffer.u_shadowBias;
            }
            else
            {
                float _2823;
                if (_2800.z <= 1.0)
                {
                    float _1712 = fma(0.9900000095367431640625, _2800.z, 0.00999999977648258209228515625);
                    _2823 = fma(_2800.z, buffer.u_shadowParam, fma(buffer.u_shadowParam - 1.0, fma(_1712, _1712, -((_1712 * _1712) * _1712)), pow(_1712, buffer.u_shadowParam)) * (1.0 - buffer.u_shadowParam));
                }
                else
                {
                    _2823 = _2800.z;
                }
                _2822 = _2823;
            }
            _2821 = _2822;
        }
        else
        {
            float _2824;
            if (_2800.z < buffer.u_shadowBias)
            {
                _2824 = _2800.z - buffer.u_shadowBias;
            }
            else
            {
                float _2825;
                if (_2800.z <= 1.0)
                {
                    _2825 = fma(0.0350000001490116119384765625 * (1.0 - buffer.u_shadowParam), 1.0 - _2800.z, fma(buffer.u_shadowParam - 1.0, fma(_2800.z, _2800.z, -((_2800.z * _2800.z) * _2800.z)), pow(_2800.z, buffer.u_shadowParam)));
                }
                else
                {
                    _2825 = _2800.z;
                }
                _2824 = _2825;
            }
            _2821 = _2824;
        }
        float4 _2610 = _2607;
        _2610.z = _2821;
        _2831 = _2610;
    }
    else
    {
        _2831 = _2800;
    }
    float4 _2850;
    if (buffer.u_enableContrast == 1)
    {
        float4 _2851;
        if (buffer.u_contrastParam <= 1.0)
        {
            float3 _865 = float3(buffer.u_contrastPivot);
            float3 _870 = ((_2831.xyz - _865) * buffer.u_contrastParam) + _865;
            float4 _2612 = _2831;
            _2612.x = _870.x;
            float4 _2614 = _2612;
            _2614.y = _870.y;
            float4 _2616 = _2614;
            _2616.z = _870.z;
            _2851 = _2616;
        }
        else
        {
            float _2832;
            if (_2831.x < buffer.u_contrastPivot)
            {
                float _1802 = buffer.u_contrastPivot * pow(0.001000000047497451305389404296875 / buffer.u_contrastPivot, 1.0 / buffer.u_contrastParam);
                float _2833;
                if (_2831.x < _1802)
                {
                    _2833 = _2831.x + (-_1802);
                }
                else
                {
                    _2833 = buffer.u_contrastPivot * pow(_2831.x / buffer.u_contrastPivot, buffer.u_contrastParam);
                }
                _2832 = _2833;
            }
            else
            {
                float _1815 = 1.0 - buffer.u_contrastPivot;
                float _2921 = buffer.u_contrastPivot - 1.0;
                float _1834 = fma(_2921, pow(0.001000000047497451305389404296875 / _1815, 1.0 / buffer.u_contrastParam), 1.0);
                float _2834;
                if (_2831.x > _1834)
                {
                    _2834 = _2831.x + (1.0 - _1834);
                }
                else
                {
                    _2834 = fma(_2921, pow((1.0 - _2831.x) / _1815, buffer.u_contrastParam), 1.0);
                }
                _2832 = _2834;
            }
            float4 _2619 = _2831;
            _2619.x = _2832;
            float _2838;
            if (_2831.y < buffer.u_contrastPivot)
            {
                float _1872 = buffer.u_contrastPivot * pow(0.001000000047497451305389404296875 / buffer.u_contrastPivot, 1.0 / buffer.u_contrastParam);
                float _2839;
                if (_2831.y < _1872)
                {
                    _2839 = _2831.y + (-_1872);
                }
                else
                {
                    _2839 = buffer.u_contrastPivot * pow(_2831.y / buffer.u_contrastPivot, buffer.u_contrastParam);
                }
                _2838 = _2839;
            }
            else
            {
                float _1885 = 1.0 - buffer.u_contrastPivot;
                float _2923 = buffer.u_contrastPivot - 1.0;
                float _1904 = fma(_2923, pow(0.001000000047497451305389404296875 / _1885, 1.0 / buffer.u_contrastParam), 1.0);
                float _2840;
                if (_2831.y > _1904)
                {
                    _2840 = _2831.y + (1.0 - _1904);
                }
                else
                {
                    _2840 = fma(_2923, pow((1.0 - _2831.y) / _1885, buffer.u_contrastParam), 1.0);
                }
                _2838 = _2840;
            }
            float4 _2622 = _2619;
            _2622.y = _2838;
            float _2844;
            if (_2831.z < buffer.u_contrastPivot)
            {
                float _1942 = buffer.u_contrastPivot * pow(0.001000000047497451305389404296875 / buffer.u_contrastPivot, 1.0 / buffer.u_contrastParam);
                float _2845;
                if (_2831.z < _1942)
                {
                    _2845 = _2831.z + (-_1942);
                }
                else
                {
                    _2845 = buffer.u_contrastPivot * pow(_2831.z / buffer.u_contrastPivot, buffer.u_contrastParam);
                }
                _2844 = _2845;
            }
            else
            {
                float _1955 = 1.0 - buffer.u_contrastPivot;
                float _2925 = buffer.u_contrastPivot - 1.0;
                float _1974 = fma(_2925, pow(0.001000000047497451305389404296875 / _1955, 1.0 / buffer.u_contrastParam), 1.0);
                float _2846;
                if (_2831.z > _1974)
                {
                    _2846 = _2831.z + (1.0 - _1974);
                }
                else
                {
                    _2846 = fma(_2925, pow((1.0 - _2831.z) / _1955, buffer.u_contrastParam), 1.0);
                }
                _2844 = _2846;
            }
            float4 _2625 = _2622;
            _2625.z = _2844;
            _2851 = _2625;
        }
        _2850 = _2851;
    }
    else
    {
        _2850 = _2831;
    }
    float4 _2870;
    if (buffer.u_enableFade == 1)
    {
        float _2852;
        if (_2850.x < 0.5)
        {
            float _2853;
            if (_2850.x < 0.0)
            {
                _2853 = fma(fma(buffer.u_fadeParam, -0.865597248077392578125, 1.0), _2850.x, buffer.u_fadeParam * 0.2704991400241851806640625);
            }
            else
            {
                _2853 = fma(buffer.u_fadeParam * 0.819999992847442626953125, pow(0.5 - _2850.x, 1.60000002384185791015625), _2850.x);
            }
            _2852 = _2853;
        }
        else
        {
            float _2854;
            if (_2850.x > 1.0)
            {
                _2854 = fma(fma(-0.589999973773956298828125, buffer.u_fadeParam, 1.0), _2850.x, buffer.u_fadeParam * 0.44249999523162841796875);
            }
            else
            {
                _2854 = fma((-0.589999973773956298828125) * buffer.u_fadeParam, pow(0.5 - _2850.x, 2.0), _2850.x);
            }
            _2852 = _2854;
        }
        float4 _2628 = _2850;
        _2628.x = _2852;
        float _2858;
        if (_2850.y < 0.5)
        {
            float _2859;
            if (_2850.y < 0.0)
            {
                _2859 = fma(fma(buffer.u_fadeParam, -0.865597248077392578125, 1.0), _2850.y, buffer.u_fadeParam * 0.2704991400241851806640625);
            }
            else
            {
                _2859 = fma(buffer.u_fadeParam * 0.819999992847442626953125, pow(0.5 - _2850.y, 1.60000002384185791015625), _2850.y);
            }
            _2858 = _2859;
        }
        else
        {
            float _2860;
            if (_2850.y > 1.0)
            {
                _2860 = fma(fma(-0.589999973773956298828125, buffer.u_fadeParam, 1.0), _2850.y, buffer.u_fadeParam * 0.44249999523162841796875);
            }
            else
            {
                _2860 = fma((-0.589999973773956298828125) * buffer.u_fadeParam, pow(0.5 - _2850.y, 2.0), _2850.y);
            }
            _2858 = _2860;
        }
        float4 _2631 = _2628;
        _2631.y = _2858;
        float _2864;
        if (_2850.z < 0.5)
        {
            float _2865;
            if (_2850.z < 0.0)
            {
                _2865 = fma(fma(buffer.u_fadeParam, -0.865597248077392578125, 1.0), _2850.z, buffer.u_fadeParam * 0.2704991400241851806640625);
            }
            else
            {
                _2865 = fma(buffer.u_fadeParam * 0.819999992847442626953125, pow(0.5 - _2850.z, 1.60000002384185791015625), _2850.z);
            }
            _2864 = _2865;
        }
        else
        {
            float _2866;
            if (_2850.z > 1.0)
            {
                _2866 = fma(fma(-0.589999973773956298828125, buffer.u_fadeParam, 1.0), _2850.z, buffer.u_fadeParam * 0.44249999523162841796875);
            }
            else
            {
                _2866 = fma((-0.589999973773956298828125) * buffer.u_fadeParam, pow(0.5 - _2850.z, 2.0), _2850.z);
            }
            _2864 = _2866;
        }
        float4 _2634 = _2631;
        _2634.z = _2864;
        _2870 = _2634;
    }
    else
    {
        _2870 = _2850;
    }
    float4 _2871;
    if (buffer.u_enableSaturation == 1)
    {
        float3 _948 = float3(0.2085399925708770751953125, 0.702085971832275390625, 0.089373998343944549560546875) * (1.0 - buffer.u_saturationParam);
        float4 _2636 = _2870;
        _2636.x = dot(_2870.xyz, _948 + float3(buffer.u_saturationParam, 0.0, 0.0));
        float4 _2638 = _2636;
        _2638.y = dot(_2870.xyz, _948 + float3(0.0, buffer.u_saturationParam, 0.0));
        float4 _2640 = _2638;
        _2640.z = dot(_2870.xyz, _948 + float3(0.0, 0.0, buffer.u_saturationParam));
        _2871 = _2640;
    }
    else
    {
        _2871 = _2870;
    }
    float4 _2872;
    if (buffer.u_enableTemperatureTint == 1)
    {
        float4 _2642 = _2871;
        _2642.x = dot(_2871.xyz, buffer.u_temperatureTintRedVec3);
        float4 _2644 = _2642;
        _2644.y = dot(_2871.xyz, buffer.u_temperatureTintGreenVec3);
        float4 _2646 = _2644;
        _2646.z = dot(_2871.xyz, buffer.u_temperatureTintBlueVec3);
        _2872 = _2646;
    }
    else
    {
        _2872 = _2871;
    }
    float4 _2887;
    if (buffer.u_enableLightSensation == 1)
    {
        float4 _2874;
        if (buffer.u_lightSensationParam <= 0.0)
        {
            float _2182 = _2872.z * 16.0;
            float _2184 = floor(_2182);
            float _2188 = floor(_2184 * 0.0588235296308994293212890625);
            float _2237 = ceil(_2182);
            float _2241 = floor(_2237 * 0.0588235296308994293212890625);
            _2874 = mix(u_lightSensationMinTexture.sample(u_lightSensationMinTextureSmplr, float2(fma(0.0553633235394954681396484375, _2872.x, fma(fma(-_2188, 17.0, _2184), 0.0588235296308994293212890625, 0.001730103860609233379364013671875)), fma(0.941176474094390869140625, _2872.y, _2188 + 0.02941176481544971466064453125))), u_lightSensationMinTexture.sample(u_lightSensationMinTextureSmplr, float2(fma(0.0553633235394954681396484375, _2872.x, fma(fma(-_2241, 17.0, _2237), 0.0588235296308994293212890625, 0.001730103860609233379364013671875)), fma(0.941176474094390869140625, _2872.y, _2241 + 0.02941176481544971466064453125))), float4(fract(_2182)));
        }
        else
        {
            float _2319 = _2872.z * 16.0;
            float _2321 = floor(_2319);
            float _2325 = floor(_2321 * 0.0588235296308994293212890625);
            float _2374 = ceil(_2319);
            float _2378 = floor(_2374 * 0.0588235296308994293212890625);
            _2874 = mix(u_lightSensationMaxTexture.sample(u_lightSensationMaxTextureSmplr, float2(fma(0.0553633235394954681396484375, _2872.x, fma(fma(-_2325, 17.0, _2321), 0.0588235296308994293212890625, 0.001730103860609233379364013671875)), fma(0.941176474094390869140625, _2872.y, _2325 + 0.02941176481544971466064453125))), u_lightSensationMaxTexture.sample(u_lightSensationMaxTextureSmplr, float2(fma(0.0553633235394954681396484375, _2872.x, fma(fma(-_2378, 17.0, _2374), 0.0588235296308994293212890625, 0.001730103860609233379364013671875)), fma(0.941176474094390869140625, _2872.y, _2378 + 0.02941176481544971466064453125))), float4(fract(_2319)));
        }
        float3 _1037 = mix(_2872.xyz, _2874.xyz, float3(abs(buffer.u_lightSensationParam)));
        float4 _2702 = _2872;
        _2702.x = _1037.x;
        float4 _2704 = _2702;
        _2704.y = _1037.y;
        float4 _2706 = _2704;
        _2706.z = _1037.z;
        float3 _2428 = _2872.xyz * 1.0;
        float3 _2875;
        if (_2872.x > 1.0)
        {
            float3 _2710 = _2706.xyz;
            _2710.x = _2428.x;
            _2875 = _2710;
        }
        else
        {
            _2875 = _2706.xyz;
        }
        float3 _2876;
        if (_2872.y > 1.0)
        {
            float3 _2714 = _2875;
            _2714.y = _2428.y;
            _2876 = _2714;
        }
        else
        {
            _2876 = _2875;
        }
        float3 _2877;
        if (_2872.z > 1.0)
        {
            float3 _2718 = _2876;
            _2718.z = _2428.z;
            _2877 = _2718;
        }
        else
        {
            _2877 = _2876;
        }
        float4 _2720 = _2706;
        _2720.x = _2877.x;
        float4 _2722 = _2720;
        _2722.y = _2877.y;
        float4 _2724 = _2722;
        _2724.z = _2877.z;
        float3 _2881;
        if (_2872.x < 0.0)
        {
            float3 _2728 = _2724.xyz;
            _2728.x = _2428.x;
            _2881 = _2728;
        }
        else
        {
            _2881 = _2724.xyz;
        }
        float3 _2882;
        if (_2872.y < 0.0)
        {
            float3 _2732 = _2881;
            _2732.y = _2428.y;
            _2882 = _2732;
        }
        else
        {
            _2882 = _2881;
        }
        float3 _2883;
        if (_2872.z < 0.0)
        {
            float3 _2736 = _2882;
            _2736.z = _2428.z;
            _2883 = _2736;
        }
        else
        {
            _2883 = _2882;
        }
        float4 _2738 = _2724;
        _2738.x = _2883.x;
        float4 _2740 = _2738;
        _2740.y = _2883.y;
        float4 _2742 = _2740;
        _2742.z = _2883.z;
        _2887 = _2742;
    }
    else
    {
        _2887 = _2872;
    }
    out.gl_FragColor = _2887;
    return out;
}

