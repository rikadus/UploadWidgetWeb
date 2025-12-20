/**
 * Função utilitária para fazer o download de um arquivo a partir de uma URL.
 * 
 * @param url - A string da URL do arquivo para baixar.
 */
export const downloadUrl = async (url: string) => {
  try {
    // Faz uma requisição para a URL fornecida e converte a resposta em um Blob (objeto binário)
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();

    // Cria um elemento <a> (link) temporário no documento
    const link = document.createElement("a");

    // Lógica para extrair o nome do arquivo a partir da URL
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const segments = pathname
      .split("/")
      .filter((segment) => segment.length > 0);
    // Pega o último segmento do caminho como nome do arquivo
    const filename = segments.length > 0 ? segments[segments.length - 1] : null;

    if (!filename) {
      throw new Error("URL does not contain a valid filename");
    }

    // Cria uma URL temporária para o Blob e a define como href do link
    link.href = window.URL.createObjectURL(blob);
    
    // Define o atributo download com o nome extraído, forçando o navegador a baixar em vez de navegar
    link.download = filename;
    
    // Adiciona o link ao corpo do documento, clica nele programaticamente e depois o remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading the file", error);
  }
};
