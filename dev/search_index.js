var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = BiweightStats","category":"page"},{"location":"#BiweightStats.jl","page":"Home","title":"BiweightStats.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Code) (Image: Build Status) (Image: PkgEval) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Robust statistics based on the biweight transform.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BiweightStats.jl is a registered package and can be installed using the Julia package manager. From the Julia REPL, enter Pkg mode (by pressing ])","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia>]\n\npkg> add BiweightStats","category":"page"},{"location":"","page":"Home","title":"Home","text":"To exit Pkg mode, just backspace. Once the package is installed it can be imported with","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using BiweightStats","category":"page"},{"location":"","page":"Home","title":"Home","text":"To exit Pkg mode, just backspace. Once the package is installed it can be imported with For more information, see the Pkg documentation.","category":"page"},{"location":"#API/Reference","page":"Home","title":"API/Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BiweightStats","category":"page"},{"location":"#BiweightStats.BiweightStats","page":"Home","title":"BiweightStats.BiweightStats","text":"BiweightStats\n\nA module for robust statistics based on the biweight transform.[1]\n\nBiweight Statistics\n\nThe basis of the biweight transform is robust analysis, that is, statistics which are resilient to outliers while still efficiently representing a variety of underlying distributions. The biweight transform is based off the median and the median absolute deviation (MAD). The median is a robust estimator of location, and the MAD is a robust estimator of scale\n\nmathrmMAD(X) = mathrmmedianleftX_i - barXright\n\nwhere barX is the median.\n\nThe biweight transform improves upon these estimates by filtering out data beyond a critical cutoff. The analogy is doing a sigma-filter, but using these robust statistics instead of the standard deviation and mean.\n\nu_i = fracX_i - barXc cdot mathrmMAD\n\nforall i quadmathrmwherequad u_i^2 le 1\n\nThe cutoff factor, c, can be directly related to a Gaussian standard-deviation by multiplying by 1.4826[2]. So a typical value of c=9 means outliers further than 133sigma are clipped (for residuals which are truly Gaussian-distributed). In addition, in BiweightStats, we also skip NaNs and Infs (but not missing or nothing).\n\nReferences\n\n[1]: NIST: biweight\n\n[2]: Median absolute deviation\n\nMethods\n\nlocation\nscale\nmidvar\nmidcov\nmidcor\n\n\n\n\n\n","category":"module"},{"location":"","page":"Home","title":"Home","text":"location\nscale\nmidvar\nmidcov\nmidcor\nBiweightTransform","category":"page"},{"location":"#BiweightStats.location","page":"Home","title":"BiweightStats.location","text":"location(X; c=9, M=nothing)\nlocation(X::AbstractArray; dims=:, kwargs...)\n\nCalculate the biweight location, a robust measure of location.\n\nhaty = fracsum_u_i^2 le 1y_i(1 - u_i^2)^2sum_u_i^2 le 1(1 - u_i^2)^2\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000) .+ 50;\n\n\njulia> location(X)\n49.98008021468018\n\nIterative refinement\n\nYou can iteratively refine the location estimate by manually passing the median, like so-\n\nX = 10 .* randn(rng, 1000) .+ 50\nystar = ystar_old = location(X)\ntol = 1e-6\nmaxiter = 10\nfor _ = 1:maxiter\n    global ystar = location(X; M=ystar_old)\n    isapprox(ystar_old, ystar; atol=tol) && break\n    global ystar_old = ystar\nend\nystar\n\n# output\n\n49.991666155308145\n\nReferences\n\nNIST: biweight location\n\n\n\n\n\n","category":"function"},{"location":"#BiweightStats.scale","page":"Home","title":"BiweightStats.scale","text":"scale(X; c=9, M=nothing)\nscale(X::AbstractArray; dims=:, kwargs...)\n\nCompute the biweight scale of the variable. This is the same as the square-root of the midvariance.\n\nhatsigma = fracsqrtnsum^n_u_i^2 le 1(y_i - bary)^2(1 - u_i^2)^4sum^n_u_i^2 le 1(1 - u_i^2)(1 - 5u_i^2)\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000) .+ 50;\n\n\njulia> scale(X)\n10.045813567765071\n\nReferences\n\nNIST: biweight scale\n\nSee Also\n\nmidcor, midvar, midcov\n\n\n\n\n\n","category":"function"},{"location":"#BiweightStats.midvar","page":"Home","title":"BiweightStats.midvar","text":"midvar(X; c=9, M=nothing)\nmidvar(X::AbstractArray; dims=:, kwargs...)\n\nCompute the biweight midvariance of the variable.\n\nhatsigma^2 = fracnsum^n_u_i^2 le 1(y_i - bary)^2(1 - u_i^2)^4leftsum_u_i^2 le 1(1 - u_i^2)(1 - 5u_i^2)right^2\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000) .+ 50;\n\n\njulia> midvar(X)\n100.9183702382928\n\nReferences\n\nNIST: biweight midvariance\n\nSee Also\n\nscale, midcor, midcov\n\n\n\n\n\n","category":"function"},{"location":"#BiweightStats.midcov","page":"Home","title":"BiweightStats.midcov","text":"midcov(X, [Y]; c=9)\n\nComputes biweight midcovariance between the two vectors. If only one vector is provided the biweight midvariance will be calculated.\n\nwarning: Warning\nNaN and Inf cannot be removed in the covariance calculation, so the returned value will be NaN\n\nhatsigma_xy = fracsum_u_i^2 le 1v_i^2 le 1(x_i - barx)(1 - u_i^2)^2(y_i - bary)(1 - v_i^2)^2sum_u_i^2 le 1(1 - u_i^2)(1 - 5u_i^2)sum_v_i^2 le 1(1 - v_i^2)(1 - 5v_i^2)\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000, 2) .+ 50;\n\n\njulia> midcov(X[:, 1], X[:, 2])\n-1.058463590812247\n\njulia> midcov(X[:, 1]) ≈ midvar(X[:, 1])\ntrue\n\njulia> X[3, 2] = NaN;\n\n\njulia> midcov(X[:, 1], X[:, 2])\nNaN\n\nReferences\n\nNIST: biweight midcovariance\n\nSee Also\n\nscale, midvar, midcor\n\n\n\n\n\nmidcov(X::AbstractMatrix; dims=1, c=9)\n\nComputes the variance-covariance matrix using the biweight midcovariance. By default, each column is a separate variable, so an (M, N) matrix with dims=1 will create an (N, N) covariance matrix. If dims=2, though, each row will become a variable, leading to an (M, M) covariance matrix.\n\nwarning: Warning\nNaN and Inf cannot be removed in the covariance calculation, so the returned value will be NaN\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000, 3) .+ 50;\n\n\njulia> C = midcov(X)\n3×3 Matrix{Float64}:\n 100.918    -1.05846    -2.88515\n  -1.05846  94.702      -0.490742\n  -2.88515  -0.490742  100.699\n\njulia> size(midcov(X; dims=2))\n(1000, 1000)\n\nReferences\n\nNIST: biweight midcovariance\n\nSee Also\n\nscale, midvar, midcor\n\n\n\n\n\n","category":"function"},{"location":"#BiweightStats.midcor","page":"Home","title":"BiweightStats.midcor","text":"midcor(X, Y; c=9)\n\nCompute the correlation between two variables using the midvariance and midcovariances.\n\nfracs_xysqrts_xx cdot s_yy\n\nwhere s_xxs_yy are the midvariances of each vector, and s_xy is the midcovariance of the two vectors.\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000, 2) .+ 50;\n\n\njulia> midcor(X[:, 1], X[:, 2])\n-0.010827077678217934\n\nReferences\n\nWikipedia\nNIST: Biweight midcorrelation\n\nSee Also\n\nmidvar, midcov, scale\n\n\n\n\n\nmidcor(X::AbstractMatrix; dims=1, c=9)\n\nComputes the correlation matrix using the biweight midcorrealtion. By default, each column of the matrix is a separate variable, so an (M, N) matrix with dims=1 will create an (N, N) correlation matrix. If dims=2, though, each row will become a variable, leading to an (M, M) correlation matrix. The diagonal will always be one.\n\nExamples\n\njulia> X = 10 .* randn(rng, 1000, 3) .+ 50;\n\n\njulia> C = midcor(X)\n3×3 Matrix{Float64}:\n  1.0        -0.0108271  -0.0286201\n -0.0108271   1.0        -0.0050253\n -0.0286201  -0.0050253   1.0\n\njulia> size(midcor(X; dims=2))\n(1000, 1000)\n\nReferences\n\nWikipedia\nNIST: Biweight midcorrelation\n\nSee Also\n\nmidvar, midcov, scale\n\n\n\n\n\n","category":"function"},{"location":"#BiweightStats.BiweightTransform","page":"Home","title":"BiweightStats.BiweightTransform","text":"BiweightTransform(X; c=9, M=nothing)\n\nCreates an iterator based on the biweight transform.[1] This iterator will first filter all input data so that only finite values remain. Then, the iteration will progress using a custom state, which includes a flag to indicate whether the value is within the cutoff, which is c times the median-absolute-deviation (MAD). The MAD is based on the deviation from M, which will default to the median of X if M is nothing.\n\nExamples\n\njulia> X = randn(rng, 100);\n\n\njulia> X[10] = 1e4 # add clear outlier\n10000.0\n\njulia> X[13] = NaN # add NaN\nNaN\n\njulia> X[25] = Inf # add Inf\nInf\n\njulia> bt = BiweightTransform(X);\n\n\nwarning: Advanced usage\nThis transform iterator is used for the internal calculations in BiweightStats.jl, which is why it has a somewhat complicated iterator implementation.\n\nLets confirm all the entries are finite. The iteration interface is divided into\n\n(d, u2, flag), state = iterate(bt, [state])\n\nwhere d is the data value minus M, u2 is (d / (c * MAD))^2, and flag is whether the value is within the transformed dataset.\n\njulia> all(d -> isfinite(d[1]), bt)\ntrue\n\nand let's see how iteration differs between a normal sample and an outlier sample, which we manually inserted at index 10-\n\njulia> (d, u2, flag), _ = iterate(bt, 9)\n((-0.17093842061187192, 0.0009098761083851183, true), 10)\n\njulia> (d, u2, flag), _ = iterate(bt, 10)\n((0.0, 0.0, false), 11)\n\nReferences\n\n[1]: NIST: biweight\n\n\n\n\n\n","category":"type"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"StatsBase.jl\nContains a couple robust statistics, but has no overlapping functionality with this package.\nRobustStats.jl\nContains many more robust statistics primarily based on the WRS R package. Appears to be unmaintained and not updated to Julia v1. The bivar function is the same as this package's midvar, although bivar does not have definitions for the statistics across axes of an array.\nastropy.stats\nPython implementations of all the statistics presented here. Some slight differences in the function signatures and the implementations are independent.","category":"page"},{"location":"#Benchmarks","page":"Home","title":"Benchmarks","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package has been benchmarked against astropy.stats. The benchmarking code can be found in bench/.","category":"page"},{"location":"","page":"Home","title":"Home","text":"System Information","category":"page"},{"location":"","page":"Home","title":"Home","text":"Benchmarks were ran on a 2021 M1 Macbook Pro","category":"page"},{"location":"","page":"Home","title":"Home","text":"Julia Version 1.8.0-beta2\nCommit b655b2c008 (2022-03-21 12:50 UTC)\nPlatform Info:\n  OS: macOS (arm64-apple-darwin21.3.0)\n  CPU: 10 × Apple M1 Max\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-13.0.1 (ORCJIT, apple-m1)\n  Threads: 8 on 8 virtual cores","category":"page"},{"location":"","page":"Home","title":"Home","text":"The benchmarks that were ran generated 2 sets of n normally-distributed samples without any outliers or non-finite numbers added. One of these sets was used for testing both this package's and astropy's implementations of the univariate statistics. For the midcovariance statistic, the data was combined into an (N 2) matrix to match the astropy function signature.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BiweightStats, CSV, DataFrames, StatsPlots # hide\nbenchdir = joinpath(dirname(pathof(BiweightStats)), \"..\", \"bench\") # hide\nresults = CSV.read(joinpath(benchdir, \"benchmark_results.csv\"), DataFrame) # hide\nshapes = [:o, :square, :diamond, :utriangle, :dtriangle] # hide\ngroups = groupby(results, :name) # hide\np = plot(xscale=:log10, yscale=:log10, xlabel=\"n\", ylabel=\"t [s]\", # hide\n    leg=:topleft, legendfontsize=7) # hide\nfor (s, (k, g)) in zip(shapes, pairs(groups)) # hide\n    @df g scatter!(:n, :t_jl, lab=k.name * \" (BiweightStats.jl)\", marker=s, c=1) # hide\n    @df g scatter!(:n, :t_py, lab=k.name * \" (astropy)\", marker=s, c=2) # hide\nend # hide\np # hide","category":"page"},{"location":"#Contributing-and-Support","page":"Home","title":"Contributing and Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to contribute, feel free to open a pull request. If you want to discuss something before contributing, head over to discussions and join or open a new topic. If you're having problems with something, please open an issue.","category":"page"}]
}
