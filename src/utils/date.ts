const DATE_FORMAT_REGEX = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

export function getAgeLocal(dateStr: string): number {
  if (!dateStr.match(DATE_FORMAT_REGEX)) {
    throw new Error('Please set date as yyyy-MM-dd format');
  }

  const birthday = new Date(dateStr);
  const now = new Date();

  const birthdayHaveCome =
    now.getMonth() > birthday.getMonth() ||
    (now.getMonth() === birthday.getMonth() &&
      now.getDate() >= birthday.getDate());

  return (
    now.getFullYear() - birthday.getFullYear() - (birthdayHaveCome ? 0 : 1)
  );
}
