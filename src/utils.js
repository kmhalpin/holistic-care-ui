const dateFormat = new Intl.DateTimeFormat('id', { dateStyle: 'medium', timeZone: 'GMT' });

export const getDateString = (dateISO) => dateFormat.format(Date.parse(dateISO));

export default { getDateString };
