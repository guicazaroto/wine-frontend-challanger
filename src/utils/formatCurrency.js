const formatBrl = (price) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,  
    maximumFractionDigits: 2
  })
}

export { formatBrl }