#pragma clang diagnostic ignored "-Wmissing-prototypes"
#pragma clang diagnostic ignored "-Wmissing-braces"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

/**
 * @brief A fixed-size array container for SYCL environments with support for multiple address spaces.
 * 
 * This structure provides a simple array implementation that can be used in different
 * SYCL execution contexts (threads, thread groups, devices) with appropriate memory 
 * qualifiers. The array size is determined at compile time, and a minimum size of 1 
 * is enforced to prevent empty arrays.
 *
 * @tparam T The type of the elements stored in the array.
 * @tparam Num The number of elements in the array. If 0, defaults to 1 to avoid empty arrays.
 */
template<typename T, size_t Num>
struct spvUnsafeArray
{
    // Array storage. Ensures at least one element to prevent empty arrays.
    T elements[Num ? Num : 1];
    
    /**
     * @brief Thread-local non-const access operator.
     * @param pos The index of the element to access.
     * @return A reference to the element at the specified position.
     */
    thread T& operator [] (size_t pos) thread
    {
        return elements[pos];
    }
    
    /**
     * @brief Thread-local const access operator.
     * @param pos The index of the element to access.
     * @return A const reference to the element at the specified position.
     */
    constexpr const thread T& operator [] (size_t pos) const thread
    {
        return elements[pos];
    }
    
    /**
     * @brief Device-specific non-const access operator.
     * @param pos The index of the element to access.
     * @return A reference to the element at the specified position.
     */
    device T& operator [] (size_t pos) device
    {
        return elements[pos];
    }
    
    /**
     * @brief Device-specific const access operator.
     * @param pos The index of the element to access.
     * @return A const reference to the element at the specified position.
     */
    constexpr const device T& operator [] (size_t pos) const device
    {
        return elements[pos];
    }
    
    /**
     * @brief Constant memory access operator (read-only).
     * @param pos The index of the element to access.
     * @return A const reference to the element at the specified position.
     */
    constexpr const constant T& operator [] (size_t pos) const constant
    {
        return elements[pos];
    }
    
    /**
     * @brief Thread group local non-const access operator.
     * @param pos The index of the element to access.
     * @return A reference to the element at the specified position.
     */
    threadgroup T& operator [] (size_t pos) threadgroup
    {
        return elements[pos];
    }
    
    /**
     * @brief Thread group local const access operator.
     * @param pos The index of the element to access.
     * @return A const reference to the element at the specified position.
     */
    constexpr const threadgroup T& operator [] (size_t pos) const threadgroup
    {
        return elements[pos];
    }
};

struct buffer_t
{
    spvUnsafeArray<float2, 75> controlPoints;
    int pointsNums;
};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], constant buffer_t& buffer)
{
    main0_out out = {};
    float _1437;
    do
    {
        int _1354_copy;
        int _1360;
        int _1354 = 0;
        int _1361 = 0;
        for (;;)
        {
            if (_1354 < 75)
            {
                if (_1354 >= buffer.pointsNums)
                {
                    _1360 = _1354;
                    break;
                }
                _1354_copy = _1354;
                _1354++;
                _1361 = _1354_copy;
                continue;
            }
            else
            {
                _1360 = _1361;
                break;
            }
        }
        if (in.uv0.x < buffer.controlPoints[0].x)
        {
            float2 _1431;
            int _1430 = 0;
            for (;;)
            {
                if (_1430 < 75)
                {
                    if (1 == _1430)
                    {
                        _1431 = buffer.controlPoints[_1430];
                        break;
                    }
                    _1430++;
                    continue;
                }
                else
                {
                    _1431 = float2(0.0);
                    break;
                }
            }
            float2 _1434;
            int _1433 = 0;
            for (;;)
            {
                if (_1433 < 75)
                {
                    if (1 == _1433)
                    {
                        _1434 = buffer.controlPoints[_1433];
                        break;
                    }
                    _1433++;
                    continue;
                }
                else
                {
                    _1434 = float2(0.0);
                    break;
                }
            }
            float _1436;
            do
            {
                if (_1431.x <= buffer.controlPoints[0].x)
                {
                    if (in.uv0.x > _1431.x)
                    {
                        _1436 = _1434.y;
                        break;
                    }
                    else
                    {
                        _1436 = buffer.controlPoints[0].y;
                        break;
                    }
                }
                _1436 = (((in.uv0.x - buffer.controlPoints[0].x) * (_1434.y - buffer.controlPoints[0].y)) / (_1431.x - buffer.controlPoints[0].x)) + buffer.controlPoints[0].y;
                break;
            } while(false);
            _1437 = _1436;
            break;
        }
        else
        {
            int _578 = (_1360 - 1) * 3;
            float2 _1363;
            int _1362 = 0;
            for (;;)
            {
                if (_1362 < 75)
                {
                    if (_578 == _1362)
                    {
                        _1363 = buffer.controlPoints[_1362];
                        break;
                    }
                    _1362++;
                    continue;
                }
                else
                {
                    _1363 = float2(0.0);
                    break;
                }
            }
            if (in.uv0.x > _1363.x)
            {
                int _586 = _578 - 1;
                float2 _1406;
                int _1405 = 0;
                for (;;)
                {
                    if (_1405 < 75)
                    {
                        if (_586 == _1405)
                        {
                            _1406 = buffer.controlPoints[_1405];
                            break;
                        }
                        _1405++;
                        continue;
                    }
                    else
                    {
                        _1406 = float2(0.0);
                        break;
                    }
                }
                float2 _1411;
                int _1410 = 0;
                for (;;)
                {
                    if (_1410 < 75)
                    {
                        if (_586 == _1410)
                        {
                            _1411 = buffer.controlPoints[_1410];
                            break;
                        }
                        _1410++;
                        continue;
                    }
                    else
                    {
                        _1411 = float2(0.0);
                        break;
                    }
                }
                float2 _1416;
                int _1415 = 0;
                for (;;)
                {
                    if (_1415 < 75)
                    {
                        if (_578 == _1415)
                        {
                            _1416 = buffer.controlPoints[_1415];
                            break;
                        }
                        _1415++;
                        continue;
                    }
                    else
                    {
                        _1416 = float2(0.0);
                        break;
                    }
                }
                float2 _1421;
                int _1420 = 0;
                for (;;)
                {
                    if (_1420 < 75)
                    {
                        if (_578 == _1420)
                        {
                            _1421 = buffer.controlPoints[_1420];
                            break;
                        }
                        _1420++;
                        continue;
                    }
                    else
                    {
                        _1421 = float2(0.0);
                        break;
                    }
                }
                float _1423;
                do
                {
                    if (_1416.x <= _1406.x)
                    {
                        if (in.uv0.x > _1416.x)
                        {
                            _1423 = _1421.y;
                            break;
                        }
                        else
                        {
                            _1423 = _1411.y;
                            break;
                        }
                    }
                    _1423 = (((in.uv0.x - _1406.x) * (_1421.y - _1411.y)) / (_1416.x - _1406.x)) + _1411.y;
                    break;
                } while(false);
                _1437 = _1423;
                break;
            }
        }
        int _1365_copy;
        int _1371;
        int _1365 = 0;
        int _1372 = 0;
        for (;;)
        {
            if (_1365 < 75)
            {
                if (_1365 >= buffer.pointsNums)
                {
                    _1371 = _1365;
                    break;
                }
                int _622 = _1365 * 3;
                float2 _1367;
                int _1366 = 0;
                for (;;)
                {
                    if (_1366 < 75)
                    {
                        if (_622 == _1366)
                        {
                            _1367 = buffer.controlPoints[_1366];
                            break;
                        }
                        _1366++;
                        continue;
                    }
                    else
                    {
                        _1367 = float2(0.0);
                        break;
                    }
                }
                if (in.uv0.x < _1367.x)
                {
                    _1371 = _1365;
                    break;
                }
                _1365_copy = _1365;
                _1365++;
                _1372 = _1365_copy;
                continue;
            }
            else
            {
                _1371 = _1372;
                break;
            }
        }
        int _634 = (_1371 - 1) * 3;
        float2 _1376;
        int _1375 = 0;
        for (;;)
        {
            if (_1375 < 75)
            {
                if (_634 == _1375)
                {
                    _1376 = buffer.controlPoints[_1375];
                    break;
                }
                _1375++;
                continue;
            }
            else
            {
                _1376 = float2(0.0);
                break;
            }
        }
        int _639 = _634 + 1;
        float2 _1381;
        int _1380 = 0;
        for (;;)
        {
            if (_1380 < 75)
            {
                if (_639 == _1380)
                {
                    _1381 = buffer.controlPoints[_1380];
                    break;
                }
                _1380++;
                continue;
            }
            else
            {
                _1381 = float2(0.0);
                break;
            }
        }
        int _644 = _634 + 2;
        float2 _1386;
        int _1385 = 0;
        for (;;)
        {
            if (_1385 < 75)
            {
                if (_644 == _1385)
                {
                    _1386 = buffer.controlPoints[_1385];
                    break;
                }
                _1385++;
                continue;
            }
            else
            {
                _1386 = float2(0.0);
                break;
            }
        }
        int _647 = _1371 * 3;
        float2 _1391;
        int _1390 = 0;
        for (;;)
        {
            if (_1390 < 75)
            {
                if (_647 == _1390)
                {
                    _1391 = buffer.controlPoints[_1390];
                    break;
                }
                _1390++;
                continue;
            }
            else
            {
                _1391 = float2(0.0);
                break;
            }
        }
        float _1402;
        do
        {
            if (abs(_1376.x - in.uv0.x) < 4.9999998736893758177757263183594e-05)
            {
                _1402 = 0.0;
                break;
            }
            if (abs(_1391.x - in.uv0.x) < 4.9999998736893758177757263183594e-05)
            {
                _1402 = 1.0;
                break;
            }
            float _1168 = fma(0.5, _1381.x, 0.5 * _1386.x);
            int _1393;
            float _1394;
            float _1395;
            float _1397;
            float _1399;
            _1399 = 1.0;
            _1397 = 0.0;
            _1395 = 0.5;
            _1394 = 0.5 * (fma(0.5, fma(0.5, _1376.x, 0.5 * _1381.x), 0.5 * _1168) + fma(0.5, _1168, 0.5 * fma(0.5, _1386.x, 0.5 * _1391.x)));
            _1393 = 0;
            float _1131;
            float _1257;
            float _1446;
            float _1447;
            for (; _1393 < 20; _1399 = _1446, _1397 = _1447, _1395 = _1131, _1394 = _1257, _1393++)
            {
                if (abs(_1394 - in.uv0.x) < 4.9999998736893758177757263183594e-05)
                {
                    break;
                }
                bool _1122 = _1394 < in.uv0.x;
                _1446 = _1122 ? _1399 : _1395;
                _1447 = _1122 ? _1395 : _1397;
                float _1130 = _1447 + _1446;
                _1131 = _1130 * 0.5;
                float _1211 = fma(-_1130, 0.5, 1.0);
                float _1225 = fma(_1211, _1381.x, _1131 * _1386.x);
                _1257 = fma(_1211, fma(_1211, fma(_1211, _1376.x, _1131 * _1381.x), _1131 * _1225), _1131 * fma(_1211, _1225, _1131 * fma(_1211, _1386.x, _1131 * _1391.x)));
            }
            _1402 = _1395;
            break;
        } while(false);
        float _1268 = 1.0 - _1402;
        float _1282 = fma(_1268, _1381.y, _1402 * _1386.y);
        _1437 = fma(_1268, fma(_1268, fma(_1268, _1376.y, _1402 * _1381.y), _1402 * _1282), _1402 * fma(_1268, _1282, _1402 * fma(_1268, _1386.y, _1402 * _1391.y)));
        break;
    } while(false);
    float _1327 = abs(_1437);
    float _1333 = fract(_1327) * 255.0;
    out.gl_FragColor = float4(floor(_1327) * 0.0039215688593685626983642578125, floor(_1333) * 0.0039215688593685626983642578125, fract(_1333), float(_1437 < 0.0));
    return out;
}

