#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float intensityY;
    float intensityR;
    float intensityG;
    float intensityB;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer, texture2d<float> lutY [[texture(0)]], texture2d<float> lutR [[texture(1)]], texture2d<float> lutG [[texture(2)]], texture2d<float> lutB [[texture(3)]], texture2d<float> inputImageTexture [[texture(4)]], sampler lutYSmplr [[sampler(0)]], sampler lutRSmplr [[sampler(1)]], sampler lutGSmplr [[sampler(2)]], sampler lutBSmplr [[sampler(3)]], sampler inputImageTextureSmplr [[sampler(4)]])
{
    main0_out out = {};
    float4 _295 = inputImageTexture.sample(inputImageTextureSmplr, in.uv0);
    float _328 = _295.x;
    float _1341;
    if (_328 < 0.0)
    {
        float4 _363 = lutR.sample(lutRSmplr, float2(0.0, 0.5));
        float _423 = fma(_363.z, 0.0039215688593685626983642578125, fma(_363.x, 255.0, _363.y));
        float _1339;
        if (_363.w < 0.5)
        {
            _1339 = _423;
        }
        else
        {
            _1339 = -_423;
        }
        float4 _366 = lutR.sample(lutRSmplr, float2(0.00390625, 0.5));
        float _448 = fma(_366.z, 0.0039215688593685626983642578125, fma(_366.x, 255.0, _366.y));
        float _1340;
        if (_366.w < 0.5)
        {
            _1340 = _448;
        }
        else
        {
            _1340 = -_448;
        }
        _1341 = fma(fast::clamp((_1340 - _1339) * 256.0, -10.0, 10.0), _328, _1339);
    }
    else
    {
        float _1342;
        if (_328 > 1.0)
        {
            float4 _384 = lutR.sample(lutRSmplr, float2(0.99609375, 0.5));
            float _473 = fma(_384.z, 0.0039215688593685626983642578125, fma(_384.x, 255.0, _384.y));
            float _1337;
            if (_384.w < 0.5)
            {
                _1337 = _473;
            }
            else
            {
                _1337 = -_473;
            }
            float4 _387 = lutR.sample(lutRSmplr, float2(1.0, 0.5));
            float _498 = fma(_387.z, 0.0039215688593685626983642578125, fma(_387.x, 255.0, _387.y));
            float _1338;
            if (_387.w < 0.5)
            {
                _1338 = _498;
            }
            else
            {
                _1338 = -_498;
            }
            _1342 = fma(fast::clamp((_1338 - _1337) * 256.0, -10.0, 10.0), _328 - 1.0, _1338);
        }
        else
        {
            float4 _405 = lutR.sample(lutRSmplr, float2(_328, 0.5));
            float _523 = fma(_405.z, 0.0039215688593685626983642578125, fma(_405.x, 255.0, _405.y));
            float _1336;
            if (_405.w < 0.5)
            {
                _1336 = _523;
            }
            else
            {
                _1336 = -_523;
            }
            _1342 = _1336;
        }
        _1341 = _1342;
    }
    float _341 = fma(_1341 - _328, buffer.intensityR, _328);
    float4 _1247 = _295;
    _1247.x = _341;
    float _542 = _295.y;
    float _1355;
    if (_542 < 0.0)
    {
        float4 _577 = lutG.sample(lutGSmplr, float2(0.0, 0.5));
        float _637 = fma(_577.z, 0.0039215688593685626983642578125, fma(_577.x, 255.0, _577.y));
        float _1353;
        if (_577.w < 0.5)
        {
            _1353 = _637;
        }
        else
        {
            _1353 = -_637;
        }
        float4 _580 = lutG.sample(lutGSmplr, float2(0.00390625, 0.5));
        float _662 = fma(_580.z, 0.0039215688593685626983642578125, fma(_580.x, 255.0, _580.y));
        float _1354;
        if (_580.w < 0.5)
        {
            _1354 = _662;
        }
        else
        {
            _1354 = -_662;
        }
        _1355 = fma(fast::clamp((_1354 - _1353) * 256.0, -10.0, 10.0), _542, _1353);
    }
    else
    {
        float _1356;
        if (_542 > 1.0)
        {
            float4 _598 = lutG.sample(lutGSmplr, float2(0.99609375, 0.5));
            float _687 = fma(_598.z, 0.0039215688593685626983642578125, fma(_598.x, 255.0, _598.y));
            float _1351;
            if (_598.w < 0.5)
            {
                _1351 = _687;
            }
            else
            {
                _1351 = -_687;
            }
            float4 _601 = lutG.sample(lutGSmplr, float2(1.0, 0.5));
            float _712 = fma(_601.z, 0.0039215688593685626983642578125, fma(_601.x, 255.0, _601.y));
            float _1352;
            if (_601.w < 0.5)
            {
                _1352 = _712;
            }
            else
            {
                _1352 = -_712;
            }
            _1356 = fma(fast::clamp((_1352 - _1351) * 256.0, -10.0, 10.0), _542 - 1.0, _1352);
        }
        else
        {
            float4 _619 = lutG.sample(lutGSmplr, float2(_542, 0.5));
            float _737 = fma(_619.z, 0.0039215688593685626983642578125, fma(_619.x, 255.0, _619.y));
            float _1350;
            if (_619.w < 0.5)
            {
                _1350 = _737;
            }
            else
            {
                _1350 = -_737;
            }
            _1356 = _1350;
        }
        _1355 = _1356;
    }
    float _555 = fma(_1355 - _542, buffer.intensityG, _542);
    float4 _1275 = _1247;
    _1275.y = _555;
    float _756 = _295.z;
    float _1369;
    if (_756 < 0.0)
    {
        float4 _791 = lutB.sample(lutBSmplr, float2(0.0, 0.5));
        float _851 = fma(_791.z, 0.0039215688593685626983642578125, fma(_791.x, 255.0, _791.y));
        float _1367;
        if (_791.w < 0.5)
        {
            _1367 = _851;
        }
        else
        {
            _1367 = -_851;
        }
        float4 _794 = lutB.sample(lutBSmplr, float2(0.00390625, 0.5));
        float _876 = fma(_794.z, 0.0039215688593685626983642578125, fma(_794.x, 255.0, _794.y));
        float _1368;
        if (_794.w < 0.5)
        {
            _1368 = _876;
        }
        else
        {
            _1368 = -_876;
        }
        _1369 = fma(fast::clamp((_1368 - _1367) * 256.0, -10.0, 10.0), _756, _1367);
    }
    else
    {
        float _1370;
        if (_756 > 1.0)
        {
            float4 _812 = lutB.sample(lutBSmplr, float2(0.99609375, 0.5));
            float _901 = fma(_812.z, 0.0039215688593685626983642578125, fma(_812.x, 255.0, _812.y));
            float _1365;
            if (_812.w < 0.5)
            {
                _1365 = _901;
            }
            else
            {
                _1365 = -_901;
            }
            float4 _815 = lutB.sample(lutBSmplr, float2(1.0, 0.5));
            float _926 = fma(_815.z, 0.0039215688593685626983642578125, fma(_815.x, 255.0, _815.y));
            float _1366;
            if (_815.w < 0.5)
            {
                _1366 = _926;
            }
            else
            {
                _1366 = -_926;
            }
            _1370 = fma(fast::clamp((_1366 - _1365) * 256.0, -10.0, 10.0), _756 - 1.0, _1366);
        }
        else
        {
            float4 _833 = lutB.sample(lutBSmplr, float2(_756, 0.5));
            float _951 = fma(_833.z, 0.0039215688593685626983642578125, fma(_833.x, 255.0, _833.y));
            float _1364;
            if (_833.w < 0.5)
            {
                _1364 = _951;
            }
            else
            {
                _1364 = -_951;
            }
            _1370 = _1364;
        }
        _1369 = _1370;
    }
    float _769 = fma(_1369 - _756, buffer.intensityB, _756);
    float4 _1303 = _1275;
    _1303.z = _769;
    float _1015 = fma(0.072200000286102294921875, _756, fma(0.2125999927520751953125, _328, 0.715200006961822509765625 * _542));
    float _1383;
    if (_1015 < 0.0)
    {
        float4 _1048 = lutY.sample(lutYSmplr, float2(0.0, 0.5));
        float _1108 = fma(_1048.z, 0.0039215688593685626983642578125, fma(_1048.x, 255.0, _1048.y));
        float _1381;
        if (_1048.w < 0.5)
        {
            _1381 = _1108;
        }
        else
        {
            _1381 = -_1108;
        }
        float4 _1051 = lutY.sample(lutYSmplr, float2(0.00390625, 0.5));
        float _1133 = fma(_1051.z, 0.0039215688593685626983642578125, fma(_1051.x, 255.0, _1051.y));
        float _1382;
        if (_1051.w < 0.5)
        {
            _1382 = _1133;
        }
        else
        {
            _1382 = -_1133;
        }
        _1383 = fma(fast::clamp((_1382 - _1381) * 256.0, -10.0, 10.0), _1015, _1381);
    }
    else
    {
        float _1384;
        if (_1015 > 1.0)
        {
            float4 _1069 = lutY.sample(lutYSmplr, float2(0.99609375, 0.5));
            float _1158 = fma(_1069.z, 0.0039215688593685626983642578125, fma(_1069.x, 255.0, _1069.y));
            float _1379;
            if (_1069.w < 0.5)
            {
                _1379 = _1158;
            }
            else
            {
                _1379 = -_1158;
            }
            float4 _1072 = lutY.sample(lutYSmplr, float2(1.0, 0.5));
            float _1183 = fma(_1072.z, 0.0039215688593685626983642578125, fma(_1072.x, 255.0, _1072.y));
            float _1380;
            if (_1072.w < 0.5)
            {
                _1380 = _1183;
            }
            else
            {
                _1380 = -_1183;
            }
            _1384 = fma(fast::clamp((_1380 - _1379) * 256.0, -10.0, 10.0), _1015 - 1.0, _1380);
        }
        else
        {
            float4 _1090 = lutY.sample(lutYSmplr, float2(_1015, 0.5));
            float _1208 = fma(_1090.z, 0.0039215688593685626983642578125, fma(_1090.x, 255.0, _1090.y));
            float _1378;
            if (_1090.w < 0.5)
            {
                _1378 = _1208;
            }
            else
            {
                _1378 = -_1208;
            }
            _1384 = _1378;
        }
        _1383 = _1384;
    }
    float3 _995 = _1303.xyz + float3(fma(_1383 - _1015, buffer.intensityY, -(fma(0.072200000286102294921875, _769, fma(0.2125999927520751953125, _341, 0.715200006961822509765625 * _555)) - _1015)));
    float4 _1331 = _1303;
    _1331.x = _995.x;
    float4 _1333 = _1331;
    _1333.y = _995.y;
    float4 _1335 = _1333;
    _1335.z = _995.z;
    out.gl_FragColor = _1335;
    return out;
}

