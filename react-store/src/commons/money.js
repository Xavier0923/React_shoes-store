// 金額貨幣轉換
export const formatPrice = cents => {
    return (cents / 100).toLocaleString('zh',{
        style:'currency',
        currency:'TWD'
    });
}