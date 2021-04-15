import dayjs from 'dayjs';
import 'dayjs/locale/id';

function dayFormatter(stringOfDate) {
    return stringOfDate ? dayjs(stringOfDate).format('DD MMMM YYYY') : '';
}

export default dayFormatter;