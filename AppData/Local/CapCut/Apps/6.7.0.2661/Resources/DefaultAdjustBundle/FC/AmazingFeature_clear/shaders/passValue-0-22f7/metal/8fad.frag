#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

constant float _343 = {};

struct main0_out
{
    float4 gl_FragColor [[color(0)]];
};

struct main0_in
{
    float2 uv0 [[user(uv0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], texture2d<float> inputTex [[texture(0)]], sampler inputTexSmplr [[sampler(0)]])
{
    main0_out out = {};
    float4 _175 = inputTex.sample(inputTexSmplr, in.uv0);
    float _206 = _175.z;
    float _207 = _175.y;
    float4 _226 = mix(float4(_206, _207, -1.0, 0.666666686534881591796875), float4(_207, _206, 0.0, -0.3333333432674407958984375), float4(step(_206, _207)));
    float _230 = _175.x;
    float _231 = _226.x;
    float4 _249 = mix(float4(_231, _343, _343, _230), float4(_230, _343, _343, _343), float4(step(_231, _230)));
    float _251 = _249.x;
    float _291 = abs(_251) * 255.0;
    float _298 = fract(_291) * 255.0;
    out.gl_FragColor = float4(floor(_291) * 0.0039215688593685626983642578125, floor(_298) * 0.0039215688593685626983642578125, floor(fract(_298) * 255.0) * 0.0039215688593685626983642578125, step(0.0, _251));
    return out;
}

