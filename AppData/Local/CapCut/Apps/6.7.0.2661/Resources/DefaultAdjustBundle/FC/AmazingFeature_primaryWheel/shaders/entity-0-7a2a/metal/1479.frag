#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct buffer_t
{
    float OffsetR;
    float OffsetG;
    float OffsetB;
    float LiftY;
    float GammaY;
    float GainY;
    float LiftR;
    float GammaR;
    float GainR;
    float LiftG;
    float GammaG;
    float GainG;
    float LiftB;
    float GammaB;
    float GainB;
    float LumaMix;
    float OffsetS;
    float LiftS;
    float GammaS;
    float GainS;
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
    float4 _145 = inputImageTexture.sample(inputImageTextureSmplr, in.uv0);
    float4 _158 = _145 + float4(buffer.OffsetR, buffer.OffsetG, buffer.OffsetB, 0.0);
    float _347 = fma(0.072200000286102294921875, buffer.OffsetB, fma(0.2125999927520751953125, buffer.OffsetR, 0.715200006961822509765625 * buffer.OffsetG));
    float _351 = _158.x;
    float _354 = _158.y;
    float _358 = _158.z;
    float _367 = fast::min(buffer.LiftY, 0.4995000064373016357421875);
    float _375 = 1.0 / fast::max(buffer.GainY, 0.001000000047497451305389404296875);
    float _379 = fast::min(_367 / (_367 - 0.5), _375 - 0.0005000000237487256526947021484375);
    float _390 = (((fma(0.072200000286102294921875, _358, fma(0.2125999927520751953125, _351, 0.715200006961822509765625 * _354)) - _347) - _379) / (_375 - _379)) + _347;
    float _777;
    if (_390 >= 0.0)
    {
        _777 = pow(_390, buffer.GammaY);
    }
    else
    {
        _777 = -pow(-_390, buffer.GammaY);
    }
    float _411 = fast::min(buffer.LiftR, 0.4995000064373016357421875);
    float _419 = 1.0 / fast::max(buffer.GainR, 0.001000000047497451305389404296875);
    float _423 = fast::min(_411 / (_411 - 0.5), _419 - 0.0005000000237487256526947021484375);
    float _434 = (((_351 - buffer.OffsetR) - _423) / (_419 - _423)) + buffer.OffsetR;
    float _779;
    if (_434 >= 0.0)
    {
        _779 = pow(_434, buffer.GammaR);
    }
    else
    {
        _779 = -pow(-_434, buffer.GammaR);
    }
    float4 _738 = _158;
    _738.x = _779;
    float _455 = fast::min(buffer.LiftG, 0.4995000064373016357421875);
    float _463 = 1.0 / fast::max(buffer.GainG, 0.001000000047497451305389404296875);
    float _467 = fast::min(_455 / (_455 - 0.5), _463 - 0.0005000000237487256526947021484375);
    float _478 = (((_354 - buffer.OffsetG) - _467) / (_463 - _467)) + buffer.OffsetG;
    float _781;
    if (_478 >= 0.0)
    {
        _781 = pow(_478, buffer.GammaG);
    }
    else
    {
        _781 = -pow(-_478, buffer.GammaG);
    }
    float4 _742 = _738;
    _742.y = _781;
    float _499 = fast::min(buffer.LiftB, 0.4995000064373016357421875);
    float _507 = 1.0 / fast::max(buffer.GainB, 0.001000000047497451305389404296875);
    float _511 = fast::min(_499 / (_499 - 0.5), _507 - 0.0005000000237487256526947021484375);
    float _522 = (((_358 - buffer.OffsetB) - _511) / (_507 - _511)) + buffer.OffsetB;
    float _783;
    if (_522 >= 0.0)
    {
        _783 = pow(_522, buffer.GammaB);
    }
    else
    {
        _783 = -pow(-_522, buffer.GammaB);
    }
    float4 _746 = _742;
    _746.z = _783;
    float3 _248 = _746.xyz + float3((_777 - fma(0.072200000286102294921875, _783, fma(0.2125999927520751953125, _779, 0.715200006961822509765625 * _781))) * buffer.LumaMix);
    float _250 = _248.x;
    float4 _751 = _746;
    _751.x = _250;
    float _252 = _248.y;
    float4 _753 = _751;
    _753.y = _252;
    float _254 = _248.z;
    float4 _755 = _753;
    _755.z = _254;
    float _562 = fma(0.072200000286102294921875, _254, fma(0.2125999927520751953125, _250, 0.715200006961822509765625 * _252));
    float _569 = fast::min(buffer.LiftS, 0.4995000064373016357421875);
    float _581 = fast::min(_569 / (_569 - 0.5), 0.999499976634979248046875);
    float _590 = (_562 - _581) / (1.0 - _581);
    float _788;
    if (_590 >= 0.0)
    {
        _788 = pow(_590, 1.0);
    }
    else
    {
        _788 = -pow(-_590, 1.0);
    }
    float _790;
    if (_562 >= 0.0)
    {
        _790 = pow(_562, buffer.GammaS);
    }
    else
    {
        _790 = -pow(-_562, buffer.GammaS);
    }
    float _665 = 1.0 / fast::max(buffer.GainS, 0.001000000047497451305389404296875);
    float _669 = fast::min(-0.0, _665 - 0.0005000000237487256526947021484375);
    float _678 = (_562 - _669) / (_665 - _669);
    float _792;
    if (_678 >= 0.0)
    {
        _792 = pow(_678, 1.0);
    }
    else
    {
        _792 = -pow(-_678, 1.0);
    }
    float _305 = fast::clamp((((buffer.OffsetS + (_788 - _562)) + (_790 - _562)) + (_792 - _562)) + 1.0, 0.0, 3.0);
    float3 _703 = float3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875) * (1.0 - _305);
    float4 _766 = _755;
    _766.x = dot(_755.xyz, _703 + float3(_305, 0.0, 0.0));
    float4 _768 = _766;
    _768.y = dot(_755.xyz, _703 + float3(0.0, _305, 0.0));
    float4 _770 = _768;
    _770.z = dot(_755.xyz, _703 + float3(0.0, 0.0, _305));
    float3 _325 = mix(_145.xyz, _770.xyz, float3(buffer.Intensity));
    float4 _772 = _770;
    _772.x = _325.x;
    float4 _774 = _772;
    _774.y = _325.y;
    float4 _776 = _774;
    _776.z = _325.z;
    out.gl_FragColor = _776;
    return out;
}

