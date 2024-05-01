from  math import sqrt
from pprint import pprint
#la matriz A debe ser simetrica y definida positiva
def cholesky(A):
    n = len(A)
    #create zero matrix for L
    L = [[0.0] * n for i in range(n)]
    for i in xrange(n):
        for k in xrange(i+1):
            tmp_sum = sum(L[i][j] * L[k][j] for j in xrange(k))
            if (i == k): #elemento de la diagonal
                L[i][k] = sqrt(A[i][i] - tmp_sum)
            else:
                L[i][k] = (1.0 / L[k][k] * (A[i][k] -tmp_sum))
        return L
A = [[-1.2, 2.2],[3.1, 2.1]]
L = cholesky(A)
print ("A:")
pprint(A)
print ("L:")
pprint(L)