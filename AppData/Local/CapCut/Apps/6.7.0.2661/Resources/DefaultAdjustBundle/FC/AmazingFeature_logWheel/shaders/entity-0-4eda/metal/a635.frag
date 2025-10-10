#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float RngDown;
    float RngUp;
    float ShadowR;
    float MidtoneR;
    float HightlightsR;
    float OffsetR;
    float4 s2mR;
    float4 h2mR;
    float4 s2hR;
    float ShadowG;
    float MidtoneG;
    float HightlightsG;
    float OffsetG;
    float4 s2mG;
    float4 h2mG;
    float4 s2hG;
    float ShadowB;
    float MidtoneB;
    float HightlightsB;
    float OffsetB;
    float4 s2mB;
    float4 h2mB;
    float4 s2hB;
    float ShadowS;
    float MidtoneS;
    float HightlightsS;
    float4 s2mS;
    float4 h2mS;
    float4 s2hS;
    float OffsetS;
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
    float4 _464 = inputImageTexture.sample(inputImageTextureSmplr, in.uv0);
    float _473 = fast::min(buffer.RngDown, buffer.RngUp);
    float _662 = _464.x + buffer.OffsetR;
    float _666 = (_473 + buffer.RngUp) * 0.5;
    float _669 = buffer.RngUp - _473;
    bool _671 = _669 < 0.0500000007450580596923828125;
    bool _678;
    if (_671)
    {
        _678 = (_473 - 0.0500000007450580596923828125) < _662;
    }
    else
    {
        _678 = _671;
    }
    bool _685;
    if (_678)
    {
        _685 = _662 < (buffer.RngUp + 0.0500000007450580596923828125);
    }
    else
    {
        _685 = _678;
    }
    float _2288;
    if (_685)
    {
        float _772 = _662 * _662;
        _2288 = fma(buffer.s2hR.w, _772 * _662, fma(buffer.s2hR.z, _772, fma(buffer.s2hR.y, _662, buffer.s2hR.x)));
    }
    else
    {
        float _693 = _473 - 0.0500000007450580596923828125;
        float _2289;
        if (_662 <= _693)
        {
            float _2286;
            if (buffer.ShadowR > 0.0)
            {
                _2286 = fma(_662, 1.0 - buffer.ShadowR, _473 * buffer.ShadowR);
            }
            else
            {
                float _815 = (_473 - buffer.ShadowR) / fast::max(_473, 9.9999999747524270787835121154785e-07);
                float _2287;
                if (_815 <= 9.0)
                {
                    _2287 = fma(_662, _815, buffer.ShadowR);
                }
                else
                {
                    _2287 = fma(_662, 9.0, (-8.0) * _473);
                }
                _2286 = _2287;
            }
            _2289 = _2286;
        }
        else
        {
            bool _704 = _693 < _662;
            bool _713;
            if (_704)
            {
                _713 = _662 < fast::min(_473 + 0.0500000007450580596923828125, _666);
            }
            else
            {
                _713 = _704;
            }
            float _2290;
            if (_713)
            {
                float _840 = _662 * _662;
                _2290 = fma(buffer.s2mR.w, _840 * _662, fma(buffer.s2mR.z, _840, fma(buffer.s2mR.y, _662, buffer.s2mR.x)));
            }
            else
            {
                bool _722 = (_473 + 0.0500000007450580596923828125) <= _662;
                bool _729;
                if (_722)
                {
                    _729 = _662 <= (buffer.RngUp - 0.0500000007450580596923828125);
                }
                else
                {
                    _729 = _722;
                }
                float _2291;
                if (_729)
                {
                    float _905 = buffer.MidtoneR * buffer.MidtoneR;
                    float _908 = _905 * buffer.MidtoneR;
                    float _911 = _908 * buffer.MidtoneR;
                    float _914 = _911 * buffer.MidtoneR;
                    float _917 = _914 * buffer.MidtoneR;
                    float _941 = fma(-0.90916597843170166015625, _917 * buffer.MidtoneR, fma(1.0932400226593017578125, _917, fma(0.2726530134677886962890625, _914, fma(-0.25341498851776123046875, _911, fma(-0.68149197101593017578125, _908, fma(0.906076014041900634765625, _905, fma(-1.1014499664306640625, buffer.MidtoneR, 1.0)))))));
                    _2291 = fma(1.0 - pow(1.0 - pow((_662 - _473) / fast::max(_669, 9.9999999747524270787835121154785e-07), _941), 1.0 / _941), _669, _473);
                }
                else
                {
                    bool _742 = fast::max(buffer.RngUp - 0.0500000007450580596923828125, _666) < _662;
                    bool _749;
                    if (_742)
                    {
                        _749 = _662 < (buffer.RngUp + 0.0500000007450580596923828125);
                    }
                    else
                    {
                        _749 = _742;
                    }
                    float _2292;
                    if (_749)
                    {
                        float _950 = _662 * _662;
                        _2292 = fma(buffer.h2mR.w, _950 * _662, fma(buffer.h2mR.z, _950, fma(buffer.h2mR.y, _662, buffer.h2mR.x)));
                    }
                    else
                    {
                        float _2284;
                        if (buffer.HightlightsR > 0.0)
                        {
                            float _980 = 1.0 - buffer.RngUp;
                            float _985 = fast::max(_980, 9.9999999747524270787835121154785e-07);
                            float _986 = (_980 + buffer.HightlightsR) / _985;
                            float _2285;
                            if (_986 <= 9.0)
                            {
                                _2285 = fma(_662, _986, -((buffer.RngUp * buffer.HightlightsR) / _985));
                            }
                            else
                            {
                                _2285 = fma(_662, 9.0, (-8.0) * buffer.RngUp);
                            }
                            _2284 = _2285;
                        }
                        else
                        {
                            _2284 = fma(_662, 1.0 + buffer.HightlightsR, -(buffer.RngUp * buffer.HightlightsR));
                        }
                        _2292 = _2284;
                    }
                    _2291 = _2292;
                }
                _2290 = _2291;
            }
            _2289 = _2290;
        }
        _2288 = _2289;
    }
    float4 _2220 = _464;
    _2220.x = _2288;
    float _1042 = _464.y + buffer.OffsetG;
    bool _1058;
    if (_671)
    {
        _1058 = (_473 - 0.0500000007450580596923828125) < _1042;
    }
    else
    {
        _1058 = _671;
    }
    bool _1065;
    if (_1058)
    {
        _1065 = _1042 < (buffer.RngUp + 0.0500000007450580596923828125);
    }
    else
    {
        _1065 = _1058;
    }
    float _2311;
    if (_1065)
    {
        float _1152 = _1042 * _1042;
        _2311 = fma(buffer.s2hG.w, _1152 * _1042, fma(buffer.s2hG.z, _1152, fma(buffer.s2hG.y, _1042, buffer.s2hG.x)));
    }
    else
    {
        float _1073 = _473 - 0.0500000007450580596923828125;
        float _2312;
        if (_1042 <= _1073)
        {
            float _2309;
            if (buffer.ShadowG > 0.0)
            {
                _2309 = fma(_1042, 1.0 - buffer.ShadowG, _473 * buffer.ShadowG);
            }
            else
            {
                float _1195 = (_473 - buffer.ShadowG) / fast::max(_473, 9.9999999747524270787835121154785e-07);
                float _2310;
                if (_1195 <= 9.0)
                {
                    _2310 = fma(_1042, _1195, buffer.ShadowG);
                }
                else
                {
                    _2310 = fma(_1042, 9.0, (-8.0) * _473);
                }
                _2309 = _2310;
            }
            _2312 = _2309;
        }
        else
        {
            bool _1084 = _1073 < _1042;
            bool _1093;
            if (_1084)
            {
                _1093 = _1042 < fast::min(_473 + 0.0500000007450580596923828125, _666);
            }
            else
            {
                _1093 = _1084;
            }
            float _2313;
            if (_1093)
            {
                float _1220 = _1042 * _1042;
                _2313 = fma(buffer.s2mG.w, _1220 * _1042, fma(buffer.s2mG.z, _1220, fma(buffer.s2mG.y, _1042, buffer.s2mG.x)));
            }
            else
            {
                bool _1102 = (_473 + 0.0500000007450580596923828125) <= _1042;
                bool _1109;
                if (_1102)
                {
                    _1109 = _1042 <= (buffer.RngUp - 0.0500000007450580596923828125);
                }
                else
                {
                    _1109 = _1102;
                }
                float _2314;
                if (_1109)
                {
                    float _1285 = buffer.MidtoneG * buffer.MidtoneG;
                    float _1288 = _1285 * buffer.MidtoneG;
                    float _1291 = _1288 * buffer.MidtoneG;
                    float _1294 = _1291 * buffer.MidtoneG;
                    float _1297 = _1294 * buffer.MidtoneG;
                    float _1321 = fma(-0.90916597843170166015625, _1297 * buffer.MidtoneG, fma(1.0932400226593017578125, _1297, fma(0.2726530134677886962890625, _1294, fma(-0.25341498851776123046875, _1291, fma(-0.68149197101593017578125, _1288, fma(0.906076014041900634765625, _1285, fma(-1.1014499664306640625, buffer.MidtoneG, 1.0)))))));
                    _2314 = fma(1.0 - pow(1.0 - pow((_1042 - _473) / fast::max(_669, 9.9999999747524270787835121154785e-07), _1321), 1.0 / _1321), _669, _473);
                }
                else
                {
                    bool _1122 = fast::max(buffer.RngUp - 0.0500000007450580596923828125, _666) < _1042;
                    bool _1129;
                    if (_1122)
                    {
                        _1129 = _1042 < (buffer.RngUp + 0.0500000007450580596923828125);
                    }
                    else
                    {
                        _1129 = _1122;
                    }
                    float _2315;
                    if (_1129)
                    {
                        float _1330 = _1042 * _1042;
                        _2315 = fma(buffer.h2mG.w, _1330 * _1042, fma(buffer.h2mG.z, _1330, fma(buffer.h2mG.y, _1042, buffer.h2mG.x)));
                    }
                    else
                    {
                        float _2307;
                        if (buffer.HightlightsG > 0.0)
                        {
                            float _1360 = 1.0 - buffer.RngUp;
                            float _1365 = fast::max(_1360, 9.9999999747524270787835121154785e-07);
                            float _1366 = (_1360 + buffer.HightlightsG) / _1365;
                            float _2308;
                            if (_1366 <= 9.0)
                            {
                                _2308 = fma(_1042, _1366, -((buffer.RngUp * buffer.HightlightsG) / _1365));
                            }
                            else
                            {
                                _2308 = fma(_1042, 9.0, (-8.0) * buffer.RngUp);
                            }
                            _2307 = _2308;
                        }
                        else
                        {
                            _2307 = fma(_1042, 1.0 + buffer.HightlightsG, -(buffer.RngUp * buffer.HightlightsG));
                        }
                        _2315 = _2307;
                    }
                    _2314 = _2315;
                }
                _2313 = _2314;
            }
            _2312 = _2313;
        }
        _2311 = _2312;
    }
    float4 _2235 = _2220;
    _2235.y = _2311;
    float _1422 = _464.z + buffer.OffsetB;
    bool _1438;
    if (_671)
    {
        _1438 = (_473 - 0.0500000007450580596923828125) < _1422;
    }
    else
    {
        _1438 = _671;
    }
    bool _1445;
    if (_1438)
    {
        _1445 = _1422 < (buffer.RngUp + 0.0500000007450580596923828125);
    }
    else
    {
        _1445 = _1438;
    }
    float _2334;
    if (_1445)
    {
        float _1532 = _1422 * _1422;
        _2334 = fma(buffer.s2hB.w, _1532 * _1422, fma(buffer.s2hB.z, _1532, fma(buffer.s2hB.y, _1422, buffer.s2hB.x)));
    }
    else
    {
        float _1453 = _473 - 0.0500000007450580596923828125;
        float _2335;
        if (_1422 <= _1453)
        {
            float _2332;
            if (buffer.ShadowB > 0.0)
            {
                _2332 = fma(_1422, 1.0 - buffer.ShadowB, _473 * buffer.ShadowB);
            }
            else
            {
                float _1575 = (_473 - buffer.ShadowB) / fast::max(_473, 9.9999999747524270787835121154785e-07);
                float _2333;
                if (_1575 <= 9.0)
                {
                    _2333 = fma(_1422, _1575, buffer.ShadowB);
                }
                else
                {
                    _2333 = fma(_1422, 9.0, (-8.0) * _473);
                }
                _2332 = _2333;
            }
            _2335 = _2332;
        }
        else
        {
            bool _1464 = _1453 < _1422;
            bool _1473;
            if (_1464)
            {
                _1473 = _1422 < fast::min(_473 + 0.0500000007450580596923828125, _666);
            }
            else
            {
                _1473 = _1464;
            }
            float _2336;
            if (_1473)
            {
                float _1600 = _1422 * _1422;
                _2336 = fma(buffer.s2mB.w, _1600 * _1422, fma(buffer.s2mB.z, _1600, fma(buffer.s2mB.y, _1422, buffer.s2mB.x)));
            }
            else
            {
                bool _1482 = (_473 + 0.0500000007450580596923828125) <= _1422;
                bool _1489;
                if (_1482)
                {
                    _1489 = _1422 <= (buffer.RngUp - 0.0500000007450580596923828125);
                }
                else
                {
                    _1489 = _1482;
                }
                float _2337;
                if (_1489)
                {
                    float _1665 = buffer.MidtoneB * buffer.MidtoneB;
                    float _1668 = _1665 * buffer.MidtoneB;
                    float _1671 = _1668 * buffer.MidtoneB;
                    float _1674 = _1671 * buffer.MidtoneB;
                    float _1677 = _1674 * buffer.MidtoneB;
                    float _1701 = fma(-0.90916597843170166015625, _1677 * buffer.MidtoneB, fma(1.0932400226593017578125, _1677, fma(0.2726530134677886962890625, _1674, fma(-0.25341498851776123046875, _1671, fma(-0.68149197101593017578125, _1668, fma(0.906076014041900634765625, _1665, fma(-1.1014499664306640625, buffer.MidtoneB, 1.0)))))));
                    _2337 = fma(1.0 - pow(1.0 - pow((_1422 - _473) / fast::max(_669, 9.9999999747524270787835121154785e-07), _1701), 1.0 / _1701), _669, _473);
                }
                else
                {
                    bool _1502 = fast::max(buffer.RngUp - 0.0500000007450580596923828125, _666) < _1422;
                    bool _1509;
                    if (_1502)
                    {
                        _1509 = _1422 < (buffer.RngUp + 0.0500000007450580596923828125);
                    }
                    else
                    {
                        _1509 = _1502;
                    }
                    float _2338;
                    if (_1509)
                    {
                        float _1710 = _1422 * _1422;
                        _2338 = fma(buffer.h2mB.w, _1710 * _1422, fma(buffer.h2mB.z, _1710, fma(buffer.h2mB.y, _1422, buffer.h2mB.x)));
                    }
                    else
                    {
                        float _2330;
                        if (buffer.HightlightsB > 0.0)
                        {
                            float _1740 = 1.0 - buffer.RngUp;
                            float _1745 = fast::max(_1740, 9.9999999747524270787835121154785e-07);
                            float _1746 = (_1740 + buffer.HightlightsB) / _1745;
                            float _2331;
                            if (_1746 <= 9.0)
                            {
                                _2331 = fma(_1422, _1746, -((buffer.RngUp * buffer.HightlightsB) / _1745));
                            }
                            else
                            {
                                _2331 = fma(_1422, 9.0, (-8.0) * buffer.RngUp);
                            }
                            _2330 = _2331;
                        }
                        else
                        {
                            _2330 = fma(_1422, 1.0 + buffer.HightlightsB, -(buffer.RngUp * buffer.HightlightsB));
                        }
                        _2338 = _2330;
                    }
                    _2337 = _2338;
                }
                _2336 = _2337;
            }
            _2335 = _2336;
        }
        _2334 = _2335;
    }
    float4 _2250 = _2235;
    _2250.z = _2334;
    float _1791 = fma(0.072200000286102294921875, _2334, fma(0.2125999927520751953125, _2288, 0.715200006961822509765625 * _2311));
    bool _1831;
    if (_671)
    {
        _1831 = (_473 - 0.0500000007450580596923828125) < _1791;
    }
    else
    {
        _1831 = _671;
    }
    bool _1838;
    if (_1831)
    {
        _1838 = _1791 < (buffer.RngUp + 0.0500000007450580596923828125);
    }
    else
    {
        _1838 = _1831;
    }
    float _2357;
    if (_1838)
    {
        float _1925 = _1791 * _1791;
        _2357 = fma(buffer.s2hS.w, _1925 * _1791, fma(buffer.s2hS.z, _1925, fma(buffer.s2hS.y, _1791, buffer.s2hS.x)));
    }
    else
    {
        float _1846 = _473 - 0.0500000007450580596923828125;
        float _2358;
        if (_1791 <= _1846)
        {
            float _2355;
            if (buffer.ShadowS > 0.0)
            {
                _2355 = fma(_1791, 1.0 - buffer.ShadowS, _473 * buffer.ShadowS);
            }
            else
            {
                float _1968 = (_473 - buffer.ShadowS) / fast::max(_473, 9.9999999747524270787835121154785e-07);
                float _2356;
                if (_1968 <= 9.0)
                {
                    _2356 = fma(_1791, _1968, buffer.ShadowS);
                }
                else
                {
                    _2356 = fma(_1791, 9.0, (-8.0) * _473);
                }
                _2355 = _2356;
            }
            _2358 = _2355;
        }
        else
        {
            bool _1857 = _1846 < _1791;
            bool _1866;
            if (_1857)
            {
                _1866 = _1791 < fast::min(_473 + 0.0500000007450580596923828125, _666);
            }
            else
            {
                _1866 = _1857;
            }
            float _2359;
            if (_1866)
            {
                float _1993 = _1791 * _1791;
                _2359 = fma(buffer.s2mS.w, _1993 * _1791, fma(buffer.s2mS.z, _1993, fma(buffer.s2mS.y, _1791, buffer.s2mS.x)));
            }
            else
            {
                bool _1875 = (_473 + 0.0500000007450580596923828125) <= _1791;
                bool _1882;
                if (_1875)
                {
                    _1882 = _1791 <= (buffer.RngUp - 0.0500000007450580596923828125);
                }
                else
                {
                    _1882 = _1875;
                }
                float _2360;
                if (_1882)
                {
                    float _2058 = buffer.MidtoneS * buffer.MidtoneS;
                    float _2061 = _2058 * buffer.MidtoneS;
                    float _2064 = _2061 * buffer.MidtoneS;
                    float _2067 = _2064 * buffer.MidtoneS;
                    float _2070 = _2067 * buffer.MidtoneS;
                    float _2094 = fma(-0.90916597843170166015625, _2070 * buffer.MidtoneS, fma(1.0932400226593017578125, _2070, fma(0.2726530134677886962890625, _2067, fma(-0.25341498851776123046875, _2064, fma(-0.68149197101593017578125, _2061, fma(0.906076014041900634765625, _2058, fma(-1.1014499664306640625, buffer.MidtoneS, 1.0)))))));
                    _2360 = fma(1.0 - pow(1.0 - pow((_1791 - _473) / fast::max(_669, 9.9999999747524270787835121154785e-07), _2094), 1.0 / _2094), _669, _473);
                }
                else
                {
                    bool _1895 = fast::max(buffer.RngUp - 0.0500000007450580596923828125, _666) < _1791;
                    bool _1902;
                    if (_1895)
                    {
                        _1902 = _1791 < (buffer.RngUp + 0.0500000007450580596923828125);
                    }
                    else
                    {
                        _1902 = _1895;
                    }
                    float _2361;
                    if (_1902)
                    {
                        float _2103 = _1791 * _1791;
                        _2361 = fma(buffer.h2mS.w, _2103 * _1791, fma(buffer.h2mS.z, _2103, fma(buffer.h2mS.y, _1791, buffer.h2mS.x)));
                    }
                    else
                    {
                        float _2353;
                        if (buffer.HightlightsS > 0.0)
                        {
                            float _2133 = 1.0 - buffer.RngUp;
                            float _2138 = fast::max(_2133, 9.9999999747524270787835121154785e-07);
                            float _2139 = (_2133 + buffer.HightlightsS) / _2138;
                            float _2354;
                            if (_2139 <= 9.0)
                            {
                                _2354 = fma(_1791, _2139, -((buffer.RngUp * buffer.HightlightsS) / _2138));
                            }
                            else
                            {
                                _2354 = fma(_1791, 9.0, (-8.0) * buffer.RngUp);
                            }
                            _2353 = _2354;
                        }
                        else
                        {
                            _2353 = fma(_1791, 1.0 + buffer.HightlightsS, -(buffer.RngUp * buffer.HightlightsS));
                        }
                        _2361 = _2353;
                    }
                    _2360 = _2361;
                }
                _2359 = _2360;
            }
            _2358 = _2359;
        }
        _2357 = _2358;
    }
    float _609 = fast::clamp(fma(_2357 - _1791, 12.0, buffer.OffsetS) + 1.0, 0.0, 12.0);
    float3 _2180 = float3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875) * (1.0 - _609);
    float4 _2273 = _2250;
    _2273.x = dot(_2250.xyz, _2180 + float3(_609, 0.0, 0.0));
    float4 _2275 = _2273;
    _2275.y = dot(_2250.xyz, _2180 + float3(0.0, _609, 0.0));
    float4 _2277 = _2275;
    _2277.z = dot(_2250.xyz, _2180 + float3(0.0, 0.0, _609));
    float3 _629 = mix(_464.xyz, _2277.xyz, float3(buffer.Intensity));
    float4 _2279 = _2277;
    _2279.x = _629.x;
    float4 _2281 = _2279;
    _2281.y = _629.y;
    float4 _2283 = _2281;
    _2283.z = _629.z;
    out.gl_FragColor = _2283;
    return out;
}

