export const ctrlWrapper = (ctrl) => {
  // Повертаємо обгорнутий в try-catch контролер
  // =====================================
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  // ===================================
  return func;
};
