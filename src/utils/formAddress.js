export const formAddress = (streetAddress, city, province) => {
    let parts = [streetAddress]
    
    if (city) parts.push(city)
    if (province) parts.push(province)
    
    return parts.join(', ')
  } 