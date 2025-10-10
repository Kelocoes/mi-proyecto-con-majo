#pragma clang diagnostic ignored "-Wmissing-prototypes"
#pragma clang diagnostic ignored "-Wmissing-braces"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

/**
 * @brief Fixed-size array container optimized for SYCL heterogeneous programming.
 * 
 * This structure provides a low-level array implementation with support for 
 * SYCL's address spaces (threads, thread groups, devices, constant memory).
 * It ensures a minimum size of 1 element to avoid empty array instantiations,
 * which are prohibited in certain SYCL contexts.
 * 
 * @tparam T Element type. Must be trivially copyable for device interoperability.
 * @tparam Num Compile-time size. Automatically adjusted to 1 if specified as 0.
 * 
 * @note This container does not perform bounds checking for performance reasons.
 *       Accessing elements outside the valid range leads to undefined behavior.
 */
template<typename T, size_t Num>
struct spvUnsafeArray
{
    // Storage for array elements. Ensures non-zero size to comply with SYCL requirements.
    T elements[Num ? Num : 1];
    
    /**
     * @brief Thread-private mutable access operator.
     * @param pos Element index (unchecked).
     * @return Mutable reference to the specified element in thread-local memory.
     */
    thread T& operator [] (size_t pos) thread
    {
        return elements[pos];
    }
    
    /**
     * @brief Thread-private const access operator.
     * @param pos Element index (unchecked).
     * @return Const reference to the specified element in thread-local memory.
     */
    constexpr const thread T& operator [] (size_t pos) const thread
    {
        return elements[pos];
    }
    
    /**
     * @brief Device-local mutable access operator.
     * @param pos Element index (unchecked).
     * @return Mutable reference to the specified element in device memory.
     */
    device T& operator [] (size_t pos) device
    {
        return elements[pos];
    }
    
    /**
     * @brief Device-local const access operator.
     * @param pos Element index (unchecked).
     * @return Const reference to the specified element in device memory.
     */
    constexpr const device T& operator [] (size_t pos) const device
    {
        return elements[pos];
    }
    
    /**
     * @brief Constant memory read-only access operator.
     * @param pos Element index (unchecked).
     * @return Const reference to the specified element in constant device memory.
     */
    constexpr const constant T& operator [] (size_t pos) const constant
    {
        return elements[pos];
    }
    
    /**
     * @brief Work-group shared mutable access operator.
     * @param pos Element index (unchecked).
     * @return Mutable reference to the specified element in work-group shared memory.
     */
    threadgroup T& operator [] (size_t pos) threadgroup
    {
        return elements[pos];
    }
    
    /**
     * @brief Work-group shared const access operator.
     * @param pos Element index (unchecked).
     * @return Const reference to the specified element in work-group shared memory.
     */
    constexpr const threadgroup T& operator [] (size_t pos) const threadgroup
    {
        return elements[pos];
    }
};

// Implementation of the GLSL mod() function, which is slightly different than Metal fmod()
template<typename Tx, typename Ty>
inline Tx mod(Tx x, Ty y)
{
    return x - y * floor(x / y);
}

struct buffer_t
{
    float3 u_defaultParam_1;
    float3 u_defaultParam_2;
    float3 u_defaultParam_3;
    float3 u_defaultParam_4;
    float3 u_defaultParam_5;
    float3 u_defaultParam_6;
    float3 u_defaultParam_7;
    float3 u_defaultParam_8;
    spvUnsafeArray<float3, 10> u_userParam;
    spvUnsafeArray<float4, 10> u_userColorHueRange;
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
    float4 _1074 = inputImageTexture.sample(inputImageTextureSmplr, in.uv0);
    float _1082 = buffer.u_defaultParam_1.x * 0.25;
    float _1088 = buffer.u_defaultParam_1.z * 0.3703703582286834716796875;
    float _1095 = buffer.u_defaultParam_2.x * 0.1500000059604644775390625;
    float _1100 = buffer.u_defaultParam_2.z * 0.3703703582286834716796875;
    float _1107 = buffer.u_defaultParam_3.x * 0.300000011920928955078125;
    float _1112 = buffer.u_defaultParam_3.z * 0.3703703582286834716796875;
    float _1118 = buffer.u_defaultParam_4.x * 0.300000011920928955078125;
    float _1122 = buffer.u_defaultParam_4.y * 1.10000002384185791015625;
    float _1125 = buffer.u_defaultParam_4.z * 0.3703703582286834716796875;
    float _1132 = buffer.u_defaultParam_5.x * 0.4000000059604644775390625;
    float _1138 = buffer.u_defaultParam_5.z * 0.454545438289642333984375;
    float _1144 = buffer.u_defaultParam_6.x * 0.4000000059604644775390625;
    float _1148 = buffer.u_defaultParam_6.y * 1.2000000476837158203125;
    float _1151 = buffer.u_defaultParam_6.z * 0.5;
    float _1157 = buffer.u_defaultParam_7.x * 0.4000000059604644775390625;
    float _1162 = buffer.u_defaultParam_7.z * 0.3703703582286834716796875;
    float _1168 = buffer.u_defaultParam_8.x * 0.4000000059604644775390625;
    float _1173 = buffer.u_defaultParam_8.z * 0.3703703582286834716796875;
    float _1536 = _1074.x;
    float _1538 = _1074.y;
    float _1540 = _1074.z;
    float _1545 = fast::max(_1536, fast::max(_1538, _1540));
    float _1550 = fast::min(_1536, fast::min(_1538, _1540));
    float _1553 = _1545 - _1550;
    float _1556 = _1545 + _1550;
    float _1557 = _1556 * 0.5;
    float _10881;
    float _10885;
    if (_1553 == 0.0)
    {
        _10885 = 0.0;
        _10881 = 0.0;
    }
    else
    {
        float _10888;
        if (_1557 <= 0.5)
        {
            _10888 = _1553 / _1556;
        }
        else
        {
            _10888 = _1553 / (2.0 - _1556);
        }
        float _10882;
        if (_1545 == _1536)
        {
            float _10883;
            if (_1538 >= _1540)
            {
                _10883 = (60.0 * (_1538 - _1540)) / _1553;
            }
            else
            {
                _10883 = ((60.0 * (_1538 - _1540)) / _1553) + 360.0;
            }
            _10882 = _10883;
        }
        else
        {
            float _10884;
            if (_1545 == _1538)
            {
                _10884 = ((60.0 * (_1540 - _1536)) / _1553) + 120.0;
            }
            else
            {
                _10884 = ((60.0 * (_1536 - _1538)) / _1553) + 240.0;
            }
            _10882 = _10884;
        }
        _10885 = _10888;
        _10881 = _10882;
    }
    bool _1708;
    float3 _10897;
    do
    {
        _1708 = _10881 <= 360.0;
        if ((_10881 >= 330.0) && _1708)
        {
            _10897 = float3(_1082, buffer.u_defaultParam_1.y, _1088);
            break;
        }
        if ((_10881 >= 0.0) && (_10881 <= 5.0))
        {
            _10897 = float3(_1082, buffer.u_defaultParam_1.y, _1088);
            break;
        }
        if ((_10881 >= 315.0) && (_10881 <= 330.0))
        {
            float _1763 = _10881 - 315.0;
            _10897 = float3((_1082 * _1763) * 0.066666670143604278564453125, (buffer.u_defaultParam_1.y * _1763) * 0.066666670143604278564453125, (_1088 * _1763) * 0.066666670143604278564453125);
            break;
        }
        if ((_10881 >= 5.0) && (_10881 <= 20.0))
        {
            float _1812 = 20.0 - _10881;
            _10897 = float3((_1082 * _1812) * 0.066666670143604278564453125, (buffer.u_defaultParam_1.y * _1812) * 0.066666670143604278564453125, (_1088 * _1812) * 0.066666670143604278564453125);
            break;
        }
        _10897 = float3(0.0);
        break;
    } while(false);
    float3 _10915;
    do
    {
        if ((_10881 >= 20.0) && (_10881 <= 40.0))
        {
            _10915 = float3(fma(buffer.u_defaultParam_2.x, 0.1500000059604644775390625, _10897.x), _10897.y + buffer.u_defaultParam_2.y, fma(buffer.u_defaultParam_2.z, 0.3703703582286834716796875, _10897.z));
            break;
        }
        if ((_10881 >= 0.0) && (_10881 <= 20.0))
        {
            float _2645 = _10881 + 10.0;
            _10915 = float3(fma(_1095 * _2645, 0.0333333350718021392822265625, _10897.x), fma(buffer.u_defaultParam_2.y * _2645, 0.0333333350718021392822265625, _10897.y), fma(_1100 * _2645, 0.0333333350718021392822265625, _10897.z));
            break;
        }
        if ((_10881 >= 350.0) && _1708)
        {
            float _2698 = _10881 - 350.0;
            _10915 = float3(fma(_1095 * _2698, 0.0333333350718021392822265625, _10897.x), fma(buffer.u_defaultParam_2.y * _2698, 0.0333333350718021392822265625, _10897.y), fma(_1100 * _2698, 0.0333333350718021392822265625, _10897.z));
            break;
        }
        if ((_10881 >= 40.0) && (_10881 <= 60.0))
        {
            float _2750 = 60.0 - _10881;
            _10915 = float3(fma(_1095 * _2750, 0.0500000007450580596923828125, _10897.x), fma(buffer.u_defaultParam_2.y * _2750, 0.0500000007450580596923828125, _10897.y), fma(_1100 * _2750, 0.0500000007450580596923828125, _10897.z));
            break;
        }
        _10915 = _10897;
        break;
    } while(false);
    bool _3553;
    float3 _10933;
    do
    {
        _3553 = (_10881 >= 50.0) && (_10881 <= 70.0);
        if (_3553)
        {
            _10933 = float3(fma(buffer.u_defaultParam_3.x, 0.300000011920928955078125, _10915.x), _10915.y + buffer.u_defaultParam_3.y, fma(buffer.u_defaultParam_3.z, 0.3703703582286834716796875, _10915.z));
            break;
        }
        if ((_10881 >= 25.0) && (_10881 <= 50.0))
        {
            float _3583 = _10881 - 25.0;
            _10933 = float3(fma(_1107 * _3583, 0.039999999105930328369140625, _10915.x), fma(buffer.u_defaultParam_3.y * _3583, 0.039999999105930328369140625, _10915.y), fma(_1112 * _3583, 0.039999999105930328369140625, _10915.z));
            break;
        }
        if ((_10881 >= 70.0) && (_10881 <= 90.0))
        {
            float _3632 = 90.0 - _10881;
            _10933 = float3(fma(_1107 * _3632, 0.0500000007450580596923828125, _10915.x), fma(buffer.u_defaultParam_3.y * _3632, 0.0500000007450580596923828125, _10915.y), fma(_1112 * _3632, 0.0500000007450580596923828125, _10915.z));
            break;
        }
        _10933 = _10915;
        break;
    } while(false);
    float3 _10951;
    do
    {
        if ((_10881 >= 70.0) && (_10881 <= 160.0))
        {
            _10951 = float3(fma(buffer.u_defaultParam_4.x, 0.300000011920928955078125, _10933.x), fma(buffer.u_defaultParam_4.y, 1.10000002384185791015625, _10933.y), fma(buffer.u_defaultParam_4.z, 0.3703703582286834716796875, _10933.z));
            break;
        }
        if (_3553)
        {
            float _4329 = _10881 - 50.0;
            _10951 = float3(fma(_1118 * _4329, 0.0500000007450580596923828125, _10933.x), fma(_1122 * _4329, 0.0500000007450580596923828125, _10933.y), fma(_1125 * _4329, 0.0500000007450580596923828125, _10933.z));
            break;
        }
        if ((_10881 >= 160.0) && (_10881 <= 190.0))
        {
            float _4378 = 190.0 - _10881;
            _10951 = float3(fma(_1118 * _4378, 0.0333333350718021392822265625, _10933.x), fma(_1122 * _4378, 0.0333333350718021392822265625, _10933.y), fma(_1125 * _4378, 0.0333333350718021392822265625, _10933.z));
            break;
        }
        _10951 = _10933;
        break;
    } while(false);
    float3 _10969;
    do
    {
        if ((_10881 >= 165.0) && (_10881 <= 195.0))
        {
            _10969 = float3(fma(buffer.u_defaultParam_5.x, 0.4000000059604644775390625, _10951.x), _10951.y + buffer.u_defaultParam_5.y, fma(buffer.u_defaultParam_5.z, 0.454545438289642333984375, _10951.z));
            break;
        }
        if ((_10881 >= 135.0) && (_10881 <= 165.0))
        {
            float _5075 = _10881 - 135.0;
            _10969 = float3(fma(_1132 * _5075, 0.0333333350718021392822265625, _10951.x), fma(buffer.u_defaultParam_5.y * _5075, 0.0333333350718021392822265625, _10951.y), fma(_1138 * _5075, 0.0333333350718021392822265625, _10951.z));
            break;
        }
        if ((_10881 >= 195.0) && (_10881 <= 225.0))
        {
            float _5124 = 225.0 - _10881;
            _10969 = float3(fma(_1132 * _5124, 0.0333333350718021392822265625, _10951.x), fma(buffer.u_defaultParam_5.y * _5124, 0.0333333350718021392822265625, _10951.y), fma(_1138 * _5124, 0.0333333350718021392822265625, _10951.z));
            break;
        }
        _10969 = _10951;
        break;
    } while(false);
    bool _5791;
    float3 _10987;
    do
    {
        _5791 = (_10881 >= 180.0) && (_10881 <= 235.0);
        if (_5791)
        {
            _10987 = float3(fma(buffer.u_defaultParam_6.x, 0.4000000059604644775390625, _10969.x), _10969.yz);
            break;
        }
        if ((_10881 >= 145.0) && (_10881 <= 180.0))
        {
            _10987 = float3(fma(_1144 * (_10881 - 145.0), 0.02857142873108386993408203125, _10969.x), _10969.yz);
            break;
        }
        if ((_10881 >= 235.0) && (_10881 <= 275.0))
        {
            _10987 = float3(fma(_1144 * (275.0 - _10881), 0.02500000037252902984619140625, _10969.x), _10969.yz);
            break;
        }
        _10987 = _10969;
        break;
    } while(false);
    float3 _11005;
    do
    {
        if (_5791)
        {
            _11005 = float3(_10987.x, fma(buffer.u_defaultParam_6.y, 1.2000000476837158203125, _10987.y), fma(buffer.u_defaultParam_6.z, 0.5, _10987.z));
            break;
        }
        if ((_10881 >= 145.0) && (_10881 <= 180.0))
        {
            float _6567 = _10881 - 145.0;
            _11005 = float3(_10987.x, fma(_1148 * _6567, 0.02857142873108386993408203125, _10987.y), fma(_1151 * _6567, 0.02857142873108386993408203125, _10987.z));
            break;
        }
        if ((_10881 >= 235.0) && (_10881 <= 275.0))
        {
            float _6616 = 275.0 - _10881;
            _11005 = float3(_10987.x, fma(_1148 * _6616, 0.02500000037252902984619140625, _10987.y), fma(_1151 * _6616, 0.02500000037252902984619140625, _10987.z));
            break;
        }
        _11005 = _10987;
        break;
    } while(false);
    bool _7279;
    float3 _11023;
    do
    {
        _7279 = _10881 >= 255.0;
        if (_7279 && (_10881 <= 315.0))
        {
            _11023 = float3(fma(buffer.u_defaultParam_7.x, 0.4000000059604644775390625, _11005.x), _11005.y + buffer.u_defaultParam_7.y, fma(buffer.u_defaultParam_7.z, 0.3703703582286834716796875, _11005.z));
            break;
        }
        if ((_10881 >= 235.0) && (_10881 <= 255.0))
        {
            float _7313 = _10881 - 235.0;
            _11023 = float3(fma(_1157 * _7313, 0.0500000007450580596923828125, _11005.x), fma(buffer.u_defaultParam_7.y * _7313, 0.0500000007450580596923828125, _11005.y), fma(_1162 * _7313, 0.0500000007450580596923828125, _11005.z));
            break;
        }
        if ((_10881 >= 315.0) && (_10881 <= 335.0))
        {
            float _7362 = 335.0 - _10881;
            _11023 = float3(fma(_1157 * _7362, 0.0500000007450580596923828125, _11005.x), fma(buffer.u_defaultParam_7.y * _7362, 0.0500000007450580596923828125, _11005.y), fma(_1162 * _7362, 0.0500000007450580596923828125, _11005.z));
            break;
        }
        _11023 = _11005;
        break;
    } while(false);
    float3 _11041;
    do
    {
        if ((_10881 >= 285.0) && (_10881 <= 335.0))
        {
            _11041 = float3(fma(buffer.u_defaultParam_8.x, 0.4000000059604644775390625, _11023.x), _11023.y + buffer.u_defaultParam_8.y, fma(buffer.u_defaultParam_8.z, 0.3703703582286834716796875, _11023.z));
            break;
        }
        if (_7279 && (_10881 <= 285.0))
        {
            float _8195 = _10881 - 255.0;
            _11041 = float3(fma(_1168 * _8195, 0.0333333350718021392822265625, _11023.x), fma(buffer.u_defaultParam_8.y * _8195, 0.0333333350718021392822265625, _11023.y), fma(_1173 * _8195, 0.0333333350718021392822265625, _11023.z));
            break;
        }
        if ((_10881 >= 335.0) && _1708)
        {
            float _8244 = 365.0 - _10881;
            _11041 = float3(fma(_1168 * _8244, 0.0333333350718021392822265625, _11023.x), fma(buffer.u_defaultParam_8.y * _8244, 0.0333333350718021392822265625, _11023.y), fma(_1173 * _8244, 0.0333333350718021392822265625, _11023.z));
            break;
        }
        if ((_10881 >= 0.0) && (_10881 <= 5.0))
        {
            float _8297 = 5.0 - _10881;
            _11041 = float3(fma(_1168 * _8297, 0.0333333350718021392822265625, _11023.x), fma(buffer.u_defaultParam_8.y * _8297, 0.0333333350718021392822265625, _11023.y), fma(_1173 * _8297, 0.0333333350718021392822265625, _11023.z));
            break;
        }
        _11041 = _11023;
        break;
    } while(false);
    float3 _11054;
    _11054 = _11041;
    float3 _11106;
    for (int _11043 = 0; _11043 < 10; _11054 = _11106, _11043++)
    {
        do
        {
            bool _8358 = buffer.u_userColorHueRange[_11043].x < 9.9999997473787516355514526367188e-06;
            bool _8364;
            if (_8358)
            {
                _8364 = buffer.u_userColorHueRange[_11043].y < 9.9999997473787516355514526367188e-06;
            }
            else
            {
                _8364 = _8358;
            }
            bool _8370;
            if (_8364)
            {
                _8370 = buffer.u_userColorHueRange[_11043].z < 9.9999997473787516355514526367188e-06;
            }
            else
            {
                _8370 = _8364;
            }
            bool _8376;
            if (_8370)
            {
                _8376 = buffer.u_userColorHueRange[_11043].w < 9.9999997473787516355514526367188e-06;
            }
            else
            {
                _8376 = _8370;
            }
            if (_8376)
            {
                _11106 = _11054;
                break;
            }
            else
            {
                float3 _11105;
                do
                {
                    bool _8408 = buffer.u_userColorHueRange[_11043].x < buffer.u_userColorHueRange[_11043].y;
                    bool _8415 = buffer.u_userColorHueRange[_11043].z < buffer.u_userColorHueRange[_11043].w;
                    if ((_8408 && (buffer.u_userColorHueRange[_11043].y > buffer.u_userColorHueRange[_11043].z)) && _8415)
                    {
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].y) && _1708)
                        {
                            _11105 = float3(_11054.x + buffer.u_userParam[_11043].x, _11054.y + buffer.u_userParam[_11043].y, _11054.z + buffer.u_userParam[_11043].z);
                            break;
                        }
                        if ((_10881 >= 0.0) && (_10881 <= buffer.u_userColorHueRange[_11043].z))
                        {
                            _11105 = float3(_11054.x + buffer.u_userParam[_11043].x, _11054.y + buffer.u_userParam[_11043].y, _11054.z + buffer.u_userParam[_11043].z);
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].x) && (_10881 <= buffer.u_userColorHueRange[_11043].y))
                        {
                            float _8477 = _10881 - buffer.u_userColorHueRange[_11043].x;
                            float _8481 = buffer.u_userColorHueRange[_11043].y - buffer.u_userColorHueRange[_11043].x;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8477) / _8481), _11054.y + ((buffer.u_userParam[_11043].y * _8477) / _8481), _11054.z + ((buffer.u_userParam[_11043].z * _8477) / _8481));
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].z) && (_10881 <= buffer.u_userColorHueRange[_11043].w))
                        {
                            float _8526 = buffer.u_userColorHueRange[_11043].w - _10881;
                            float _8530 = buffer.u_userColorHueRange[_11043].w - buffer.u_userColorHueRange[_11043].z;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8526) / _8530), _11054.y + ((buffer.u_userParam[_11043].y * _8526) / _8530), _11054.z + ((buffer.u_userParam[_11043].z * _8526) / _8530));
                            break;
                        }
                    }
                    bool _8570 = buffer.u_userColorHueRange[_11043].y < buffer.u_userColorHueRange[_11043].z;
                    if (((buffer.u_userColorHueRange[_11043].x > buffer.u_userColorHueRange[_11043].y) && _8570) && _8415)
                    {
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].y) && (_10881 <= buffer.u_userColorHueRange[_11043].z))
                        {
                            _11105 = float3(_11054.x + buffer.u_userParam[_11043].x, _11054.y + buffer.u_userParam[_11043].y, _11054.z + buffer.u_userParam[_11043].z);
                            break;
                        }
                        if ((_10881 >= 0.0) && (_10881 <= buffer.u_userColorHueRange[_11043].y))
                        {
                            float _8613 = (_10881 + 360.0) - buffer.u_userColorHueRange[_11043].x;
                            float _8618 = (buffer.u_userColorHueRange[_11043].y + 360.0) - buffer.u_userColorHueRange[_11043].x;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8613) / _8618), _11054.y + ((buffer.u_userParam[_11043].y * _8613) / _8618), _11054.z + ((buffer.u_userParam[_11043].z * _8613) / _8618));
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].x) && _1708)
                        {
                            float _8666 = _10881 - buffer.u_userColorHueRange[_11043].x;
                            float _8671 = (buffer.u_userColorHueRange[_11043].y + 360.0) - buffer.u_userColorHueRange[_11043].x;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8666) / _8671), _11054.y + ((buffer.u_userParam[_11043].y * _8666) / _8671), _11054.z + ((buffer.u_userParam[_11043].z * _8666) / _8671));
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].z) && (_10881 <= buffer.u_userColorHueRange[_11043].w))
                        {
                            float _8718 = buffer.u_userColorHueRange[_11043].w - _10881;
                            float _8722 = buffer.u_userColorHueRange[_11043].w - buffer.u_userColorHueRange[_11043].z;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8718) / _8722), _11054.y + ((buffer.u_userParam[_11043].y * _8718) / _8722), _11054.z + ((buffer.u_userParam[_11043].z * _8718) / _8722));
                            break;
                        }
                    }
                    if (((buffer.u_userColorHueRange[_11043].x <= buffer.u_userColorHueRange[_11043].y) && _8570) && (buffer.u_userColorHueRange[_11043].z <= buffer.u_userColorHueRange[_11043].w))
                    {
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].y) && (_10881 <= buffer.u_userColorHueRange[_11043].z))
                        {
                            _11105 = float3(_11054.x + buffer.u_userParam[_11043].x, _11054.y + buffer.u_userParam[_11043].y, _11054.z + buffer.u_userParam[_11043].z);
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].x) && (_10881 <= buffer.u_userColorHueRange[_11043].y))
                        {
                            float _8805 = _10881 - buffer.u_userColorHueRange[_11043].x;
                            float _8809 = buffer.u_userColorHueRange[_11043].y - buffer.u_userColorHueRange[_11043].x;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8805) / _8809), _11054.y + ((buffer.u_userParam[_11043].y * _8805) / _8809), _11054.z + ((buffer.u_userParam[_11043].z * _8805) / _8809));
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].z) && (_10881 <= buffer.u_userColorHueRange[_11043].w))
                        {
                            float _8854 = buffer.u_userColorHueRange[_11043].w - _10881;
                            float _8858 = buffer.u_userColorHueRange[_11043].w - buffer.u_userColorHueRange[_11043].z;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8854) / _8858), _11054.y + ((buffer.u_userParam[_11043].y * _8854) / _8858), _11054.z + ((buffer.u_userParam[_11043].z * _8854) / _8858));
                            break;
                        }
                    }
                    if ((_8408 && _8570) && (buffer.u_userColorHueRange[_11043].z > buffer.u_userColorHueRange[_11043].w))
                    {
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].y) && (_10881 <= buffer.u_userColorHueRange[_11043].z))
                        {
                            _11105 = float3(_11054.x + buffer.u_userParam[_11043].x, _11054.y + buffer.u_userParam[_11043].y, _11054.z + buffer.u_userParam[_11043].z);
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].x) && (_10881 <= buffer.u_userColorHueRange[_11043].y))
                        {
                            float _8941 = _10881 - buffer.u_userColorHueRange[_11043].x;
                            float _8945 = buffer.u_userColorHueRange[_11043].y - buffer.u_userColorHueRange[_11043].x;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8941) / _8945), _11054.y + ((buffer.u_userParam[_11043].y * _8941) / _8945), _11054.z + ((buffer.u_userParam[_11043].z * _8941) / _8945));
                            break;
                        }
                        if ((_10881 >= buffer.u_userColorHueRange[_11043].z) && _1708)
                        {
                            float _8988 = buffer.u_userColorHueRange[_11043].w + 360.0;
                            float _8990 = _8988 - _10881;
                            float _8995 = _8988 - buffer.u_userColorHueRange[_11043].z;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _8990) / _8995), _11054.y + ((buffer.u_userParam[_11043].y * _8990) / _8995), _11054.z + ((buffer.u_userParam[_11043].z * _8990) / _8995));
                            break;
                        }
                        if ((_10881 >= 0.0) && (_10881 <= buffer.u_userColorHueRange[_11043].w))
                        {
                            float _9043 = buffer.u_userColorHueRange[_11043].w - _10881;
                            float _9048 = (buffer.u_userColorHueRange[_11043].w + 360.0) - buffer.u_userColorHueRange[_11043].z;
                            _11105 = float3(_11054.x + ((buffer.u_userParam[_11043].x * _9043) / _9048), _11054.y + ((buffer.u_userParam[_11043].y * _9043) / _9048), _11054.z + ((buffer.u_userParam[_11043].z * _9043) / _9048));
                            break;
                        }
                    }
                    _11105 = _11054;
                    break;
                } while(false);
                _11106 = _11105;
                break;
            }
        } while(false);
    }
    float _9091 = mod(_10881 + _11054.x, 360.0);
    float _11055;
    if (_9091 > 360.0)
    {
        _11055 = _9091 - 360.0;
    }
    else
    {
        _11055 = _9091;
    }
    float _11056;
    if (_11055 < 0.0)
    {
        _11056 = _11055 + 360.0;
    }
    else
    {
        _11056 = _11055;
    }
    float3 _10813 = float3(_10881, _10885, _1557);
    _10813.x = _11056;
    float _1353 = fast::clamp(_11054.y * 0.00999999977648258209228515625, -1.0, 1.0);
    float3 _10816 = _11054;
    _10816.y = _1353;
    float3 _11061;
    float3 _11062;
    if (_1353 < 0.0)
    {
        float3 _10821 = _10813;
        _10821.y = _10885 * (1.0 + _1353);
        _11062 = _10821;
        _11061 = _10816;
    }
    else
    {
        float3 _10824 = _10816;
        _10824.y = _1353 * 0.5;
        float3 _10830 = _10813;
        _10830.y = _10885 + fma(-_10885, fma(-_1353, 0.5, 1.0), _10885);
        _11062 = _10830;
        _11061 = _10824;
    }
    float _1390 = fast::clamp(_11061.z * 0.00999999977648258209228515625, -1.0, 1.0);
    float3 _11075;
    if (_1390 <= 0.0)
    {
        float _11071;
        if (_11062.z < 0.5)
        {
            _11071 = (_11062.y * 2.0) * _11062.z;
        }
        else
        {
            _11071 = _11062.y;
        }
        float3 _10847 = _11062;
        _10847.z = _11062.z + (_11062.z - fma(-(_11071 * (1.0 - _11062.z)), _1390, _11062.z));
        _11075 = _10847;
    }
    else
    {
        float _11067;
        if (_11062.z < 0.5)
        {
            _11067 = (_11062.y * 2.0) * _11062.z;
        }
        else
        {
            _11067 = _11062.y;
        }
        float3 _10862 = _11062;
        _10862.z = fma(_11067 * (1.14999997615814208984375 - _11062.z), (1.0 - _11061.y) * _1390, _11062.z);
        _11075 = _10862;
    }
    float _1484 = fast::clamp(_11075.y, 0.0, 1.0);
    float _1488 = fast::clamp(_11075.z, 0.0, 1.0);
    float _9125 = _11075.x * 0.00277777784503996372222900390625;
    float _11086;
    float _11093;
    float _11097;
    if (_1484 == 0.0)
    {
        _11097 = _1488;
        _11093 = _1488;
        _11086 = _1488;
    }
    else
    {
        float _11076;
        if (_1488 < 0.5)
        {
            _11076 = _1488 * (1.0 + _1484);
        }
        else
        {
            _11076 = fma(-_1488, _1484, _1488 + _1484);
        }
        float _9161 = fma(2.0, _1488, -_11076);
        float _9163 = fma(_11075.x, 0.00277777784503996372222900390625, 0.3333333432674407958984375);
        float _11079;
        do
        {
            float _11077;
            if (_9163 < 0.0)
            {
                _11077 = _9163 + 1.0;
            }
            else
            {
                _11077 = _9163;
            }
            float _11078;
            if (_11077 > 1.0)
            {
                _11078 = _11077 - 1.0;
            }
            else
            {
                _11078 = _11077;
            }
            if (_11078 < 0.16666667163372039794921875)
            {
                _11079 = fma((_11076 - _9161) * 6.0, _11078, _9161);
                break;
            }
            if (_11078 < 0.5)
            {
                _11079 = _11076;
                break;
            }
            if (_11078 < 0.666666686534881591796875)
            {
                _11079 = fma((_11076 - _9161) * (0.666666686534881591796875 - _11078), 6.0, _9161);
                break;
            }
            _11079 = _9161;
            break;
        } while(false);
        float _11082;
        do
        {
            float _11080;
            if (_9125 < 0.0)
            {
                _11080 = fma(_11075.x, 0.00277777784503996372222900390625, 1.0);
            }
            else
            {
                _11080 = _9125;
            }
            float _11081;
            if (_11080 > 1.0)
            {
                _11081 = _11080 - 1.0;
            }
            else
            {
                _11081 = _11080;
            }
            if (_11081 < 0.16666667163372039794921875)
            {
                _11082 = fma((_11076 - _9161) * 6.0, _11081, _9161);
                break;
            }
            if (_11081 < 0.5)
            {
                _11082 = _11076;
                break;
            }
            if (_11081 < 0.666666686534881591796875)
            {
                _11082 = fma((_11076 - _9161) * (0.666666686534881591796875 - _11081), 6.0, _9161);
                break;
            }
            _11082 = _9161;
            break;
        } while(false);
        float _9172 = fma(_11075.x, 0.00277777784503996372222900390625, -0.3333333432674407958984375);
        float _11085;
        do
        {
            float _11083;
            if (_9172 < 0.0)
            {
                _11083 = _9172 + 1.0;
            }
            else
            {
                _11083 = _9172;
            }
            float _11084;
            if (_11083 > 1.0)
            {
                _11084 = _11083 - 1.0;
            }
            else
            {
                _11084 = _11083;
            }
            if (_11084 < 0.16666667163372039794921875)
            {
                _11085 = fma((_11076 - _9161) * 6.0, _11084, _9161);
                break;
            }
            if (_11084 < 0.5)
            {
                _11085 = _11076;
                break;
            }
            if (_11084 < 0.666666686534881591796875)
            {
                _11085 = fma((_11076 - _9161) * (0.666666686534881591796875 - _11084), 6.0, _9161);
                break;
            }
            _11085 = _9161;
            break;
        } while(false);
        _11097 = _11085;
        _11093 = _11082;
        _11086 = _11079;
    }
    out.gl_FragColor = float4(fast::clamp(float3(_11086, _11093, _11097), float3(0.0), float3(1.0)), _1074.w);
    return out;
}

