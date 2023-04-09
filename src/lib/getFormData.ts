/**
 * Extracts form data from a given event object.
 *
 * @param event - The event object representing the form submission.
 * @returns An object containing the form data.
 */
const getFormData = (
  event: Event,
  type?: string | object
): Record<string, unknown> => {
  event.preventDefault(); // prevent the form from actually submitting

  const formData = new FormData(event.target as HTMLFormElement);
  const formValues: Record<string, any> = {};

  for (let [key, value] of formData.entries()) {
    if (!value || /^\s*$/.test(value.toString())) {
      // ignore empty or whitespace-only values
      continue;
    }

    if (typeof value === "string") {
      value = value.trim();
    }

    //@ts-ignore
    const element = event?.target?.elements?.namedItem(
      key
    ) as HTMLInputElement | null;

    if (element?.type === "checkbox") {
      formValues[key] = element.checked;
    } else if (element?.type === "date") {
      formValues[key] = new Date(value.toString());
    } else if (key.includes(".")) {
      // handle nested properties
      const keys = key.split(".");
      let obj = formValues;
      for (let i = 0; i < keys.length - 1; i++) {
        const currentKey = keys[i];
        obj[currentKey] = obj[currentKey] || {};
        obj = obj[currentKey];
      }
      obj[keys[keys.length - 1]] = value;
    } else if (key.endsWith("[]")) {
      // handle multi-select options
      const newKey = key.slice(0, -2);
      formValues[newKey] = formValues[newKey] || [];
      formValues[newKey].push(value);
    } else if (value === "null") {
      formValues[key] = null;
    } else {
      // default case: treat value as string or number

      formValues[key] = isNaN(Number(value)) ? value : Number(value);
    }
  }

  return formValues;
};

export default getFormData;
