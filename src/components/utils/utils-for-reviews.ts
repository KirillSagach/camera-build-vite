import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

function formatData(dateFormData: string, formatString: string) {
  return dayjs(dateFormData).format(formatString);
}

export {formatData};
