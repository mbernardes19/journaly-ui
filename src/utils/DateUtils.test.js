import {_convertDate} from './DateUtils';

test('should return date as Apr 12th, 2020', () => {
    const isoStringDate = '4/12/2020, 12:53:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Apr 12th, 2020, 12:53 AM');
});

test('should return date as Dec 1st, 2022', () => {
    const isoStringDate = '12/01/2022, 1:21:59 AM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Dec 1st, 2022, 1:21 AM');
});

test('should return date as Oct 2nd, 2021', () => {
    const isoStringDate = '10/02/2021, 11:34:59 PM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('Oct 2nd, 2021, 11:34 PM');
});

test('should return date as May 3rd, 2021', () => {
    const isoStringDate = '5/03/2023, 6:22:59 PM';
    const formatedDate = _convertDate(isoStringDate);
    expect(formatedDate).toBe('May 3rd, 2023, 6:22 PM');
});
