export const getDateString = (dateISO) => {
  const date = new Date(dateISO);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return `${date.getDate() - 1} ${months[date.getMonth()] || 'Not Found'} ${date.getFullYear()}`;
};

export default { getDateString };
