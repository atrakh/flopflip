import reducer, { UPDATE_FLAGS, update } from './flags';

describe('constants', () => {
  it('should contain `flags/update`', () => {
    expect(UPDATE_FLAGS).toEqual('@flopflip/flags/update');
  });
});

describe('action creators', () => {
  describe('when updating flags', () => {
    let flags;
    beforeEach(() => {
      flags = { a: 'b' };
    });
    it('should return `flags/update` type', () => {
      expect(update(flags)).toEqual({
        type: UPDATE_FLAGS,
        payload: expect.any(Object),
      });
    });

    it('should return passed `flags`', () => {
      expect(update(flags)).toEqual({
        type: expect.any(String),
        payload: flags,
      });
    });
  });
});

describe('reducers', () => {
  describe('when updating flags', () => {
    describe('without previous flags', () => {
      let payload;
      beforeEach(() => {
        payload = {
          a: true,
          b: false,
        };
      });

      it('should set the new flags', () => {
        expect(reducer(undefined, { type: UPDATE_FLAGS, payload })).toEqual({
          ...payload,
        });
      });
    });

    describe('with previous flags', () => {
      let payload;
      beforeEach(() => {
        payload = {
          a: true,
          b: false,
        };
      });

      it('should merge with new flags', () => {
        expect(reducer({ c: true }, { type: UPDATE_FLAGS, payload })).toEqual({
          ...payload,
          c: true,
        });
      });
    });
  });
});
