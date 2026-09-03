class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        n = len(matrix)
        m = len(matrix[0])
        n_lower = 0
        n_higher = len(matrix) - 1
        m_lower = 0
        m_higher = len(matrix[0]) - 1

        row_found = False
        target_row = 0

        while (not row_found) and n_lower <= n_higher: 
            n_mid = int((n_lower + n_higher)/2)

            if matrix[n_mid][m_lower] == target : 
                return True
            elif matrix[n_mid][m_higher] == target :
                return True
            elif matrix[n_mid][m_lower] > target and matrix[n_mid][m_higher] > target :
                n_higher = n_mid - 1
            elif matrix[n_mid][m_lower] < target and matrix[n_mid][m_higher] < target :
                n_lower = n_mid + 1
            elif matrix[n_mid][m_lower] < target and matrix[n_mid][m_higher] > target:
                row_found = True
                target_row = n_mid
            else: 
                return False

        print(target_row)
        left = 0
        right = len(matrix[target_row]) - 1

        while left <= right:
            mid = int((left + right) / 2)

            if matrix[target_row][mid] == target :
                return True
            elif matrix[target_row][mid] < target :
                left = mid + 1
            else :
                right = mid - 1 

        return False