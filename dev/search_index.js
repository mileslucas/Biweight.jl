var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Biweight","category":"page"},{"location":"#Biweight.jl","page":"Home","title":"Biweight.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Code) (Image: Build Status) (Image: PkgEval) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Robust statistics based on the biweight transform.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Biweight.jl can be installed using the Julia package manager. From the Julia REPL, enter Pkg mode (by pressing ])","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia>]\n\npkg> add https://github.com/mileslucas/Biweight.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"To exit Pkg mode, just backspace. Once the package is installed it can be imported with","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Biweight","category":"page"},{"location":"","page":"Home","title":"Home","text":"To exit Pkg mode, just backspace. Once the package is installed it can be imported with For more information, see the Pkg documentation.","category":"page"},{"location":"#Methods","page":"Home","title":"Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The following statistics are defined as methods-","category":"page"},{"location":"","page":"Home","title":"Home","text":"Biweight.location\nBiweight.scale\nBiweight.midvar\nBiweight.midcov\nBiweight.midcor","category":"page"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"RobustStats.jl\nContains many more robust statistics primarily based on the WRS R package. Appears to be unmaintained and not updated to Julia v1. The bivar function is the same as this package's [Biweight.midvar], although bivar does not have definitions for the statistics across axes of an array.","category":"page"},{"location":"#API/Reference","page":"Home","title":"API/Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Biweight]","category":"page"},{"location":"#Biweight.Biweight","page":"Home","title":"Biweight.Biweight","text":"Biweight\n\nA module for robust statistics. The following methods are implemented\n\nMethods\n\nBiweight.location\nBiweight.scale\nBiweight.midvar\nBiweight.midcov\nBiweight.midcor\n\n\n\n\n\n","category":"module"},{"location":"#Biweight.location-Tuple{Any}","page":"Home","title":"Biweight.location","text":"Biweight.location(X; c=6, maxiter=10, tol=1e-6)\n\nIteratively calculate the biweight location, a robust measure of location.\n\nStopping Criteria\n\nThe location will be refined until maxiter is reached or until the absolute change between estimates is below tol.\n\n\n\n\n\n","category":"method"},{"location":"#Biweight.midcov-Union{Tuple{AbstractMatrix{T}}, Tuple{T}} where T","page":"Home","title":"Biweight.midcov","text":"Biweight.midcov(X::AbstractMatrix; dims=1, c=9)\n\nComputes the variance-covariance matrix using the biweight midcovariance. By default, each column is a separate variable, so an (M, N) matrix with dims=1 will create an (N, N) covariance matrix. If dims=2, though, each row will become a variable, leading to an (M, M) covariance matrix.\n\nReferences\n\nhttps://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwmidc.htm\n\nSee Also\n\nBiweight.scale, Biweight.midvar, Biweight.midcor\n\n\n\n\n\n","category":"method"},{"location":"#Biweight.midcov-Union{Tuple{S}, Tuple{V}, Tuple{AbstractVector{V}, AbstractVector{S}}} where {V, S}","page":"Home","title":"Biweight.midcov","text":"Biweight.midcov(X::AbstractVecotr, [Y::AbstractVector]; c=9)\n\nComputes biweight midcovariance between the two vectors. If only one vector is provided the biweight midvariance will be calculated.\n\nReferences\n\nhttps://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwmidc.htm\n\nSee Also\n\nBiweight.scale, Biweight.midvar, Biweight.midcor\n\n\n\n\n\n","category":"method"},{"location":"#Biweight.midvar-Tuple{Any}","page":"Home","title":"Biweight.midvar","text":"Biweight.midvar(X; c=9)\n\nCompute the biweight midvariance of the variable.\n\nReferences\n\nhttps://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwmidv.htm\n\nSee Also\n\nBiweight.scale, Biweight.midcor, Biweight.midcov\n\n\n\n\n\n","category":"method"},{"location":"#Biweight.scale-Tuple{Any}","page":"Home","title":"Biweight.scale","text":"Biweight.scale(X; c=9)\n\nCompute the biweight midvariance of the variable.\n\nReferences\n\nhttps://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwmidv.htm\n\nSee Also\n\nBiweight.midcor, Biweight.midvar, Biweight.midcov\n\n\n\n\n\n","category":"method"},{"location":"#Contributing-and-Support","page":"Home","title":"Contributing and Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to contribute, feel free to open a pull request. If you want to discuss something before contributing, head over to discussions and join or open a new topic. If you're having problems with something, please open an issue.","category":"page"}]
}
