package net.guides.springboot2.springboot2jpacrudexample.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExcecaoGlobalHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(RecursoExcecaoNaoEncontrado.class)
	public ResponseEntity<?> resourceNotFoundException(RecursoExcecaoNaoEncontrado ex, WebRequest request) {
		DetalhesErro errorDetails = new DetalhesErro(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> globleExcpetionHandler(Exception ex, WebRequest request) {
		DetalhesErro errorDetails = new DetalhesErro(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
