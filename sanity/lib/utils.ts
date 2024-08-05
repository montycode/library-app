import qs from "query-string";

interface BuildQueryParams {
  type: string;
  query?: string;
  assetType?: string;
  page?: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query = "", assetType = "", page = 1, perPage = 4 } = params;

  const conditions = [`*[_type == "${type}"`];

  if (query) {
    conditions.push(`name match "${query}*"`);
  }

  if (assetType) {
    if (assetType === "featured") {
      conditions.push(`favorite == true`);
    } else {
      conditions.push(`assetType == "${assetType}"`);
    }
  }

  // Calcular los límites de paginación
  const offset = (page - 1) * perPage;
  const limit = page * perPage;

  // Construir la consulta final
  const finalQuery =
    conditions.length > 1
      ? `${conditions[0]} && (${conditions.slice(1).join(" && ")})][${offset}...${limit}]`
      : `${conditions[0]}][${offset}...${limit}]`;

  console.log("Generated Query:", finalQuery); // Depuración: Verifica la consulta generada

  return finalQuery;
}

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
}
