const handleZodError = (error) => {
    const errorMessages = error.errors.map((err) => err.message);
    return { error: errorMessages.join(', ') };
  };

  module.exports = handleZodError;