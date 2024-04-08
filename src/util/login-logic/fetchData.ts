const getSuspender = <T>(promise: Promise<T>) => {
    let status: "pending" | "success" | "error" = "pending";
    let response: T | undefined;

    const suspender = promise.then(
        (res: T) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response as T; // Asserting 'response' as 'T'
        }
    };

    return { read };
};

export function fetchData<T>(url: string): { read: () => T } {
    const promise: Promise<T> = fetch(url)
        .then((response) => response.json())
        .then((json) => json);

    return getSuspender<T>(promise);
}